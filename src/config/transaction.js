import { pool } from "./database.js";

export async function runTransaction(callback, ...args) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')
        let response = await callback(args, client)
        await client.query('COMMIT')
        return response;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e;
    } finally {
        client.release()
    }
}