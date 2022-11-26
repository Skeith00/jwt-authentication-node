const { pool } = require.main.require("./config/database");

const createUser = (request, response) => {
    const { email, password, name, last_name } = request.body

    pool
        .query( 
            `INSERT INTO users(email, password, name, last_name) VALUES($1, crypt($2, gen_salt('bf')), $3, $4) RETURNING id`, 
            [email, password, name, last_name]
        )
        .then((res) => {
            console.log(res.rows[0].name);
            response.status(201).send(`User added with ID: ${results.rows[0].id}`)
        })
        .catch((err) => console.error('Error executing query', err.stack))
}