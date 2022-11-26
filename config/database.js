// https://node-postgres.com/
const { Pool} = require('pg');

const pool = new Pool({
  user: process.env['DATABASE_USER'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE_DATABASE'],
  host: process.env['DATABASE_HOST'],
  port: process.env['DATABASE_PORT'],
  max: process.env['DATABASE_MAX_CONNECTIONS'],
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = { pool };