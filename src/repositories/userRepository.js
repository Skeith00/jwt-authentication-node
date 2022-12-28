import { pool } from "../config/database.js";
import dbError  from "../models/errors/dbError.js";

export async function createUser(user){
    try {
        const results = await pool.query( 
            `INSERT INTO user_account(email, password, name, last_name) VALUES($1, $2, $3, $4) RETURNING id`, 
            [user.email, user.password, user.firstName, user.lastName]
        );    
        return results.rows[0];
      } catch(err) {
        throw new dbError(`Error when trying to create user with email ${user.email}.`, err);
      }
}