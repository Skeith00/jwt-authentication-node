-- https://www.postgresql.org/docs/current/pgcrypto.html

CREATE EXTENSION pgcrypto;

CREATE TABLE IF NOT EXISTS user_account (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

-- https://www.postgresql.org/docs/current/pgcrypto.html#id-1.11.7.37.8
INSERT INTO user_account (email, password, name, last_name) VALUES (
  'sergi@mail.com',
  crypt('1234', gen_salt('bf')),
  'Sergi',
  'Montanes'
);

/*SELECT id FROM user WHERE email = 'sergi@mail.com' AND password = crypt('1234', password);*/