import { pool } from "../config/database.js";
import dbError  from "../models/errors/dbError.js";

export async function createUser(user, client) {
    try {
        const results = await client.query( 
            `INSERT INTO user_account(email, password, name, last_name) VALUES($1, $2, $3, $4) RETURNING id`, 
            [user.email, user.password, user.firstName, user.lastName]
        );    
        return results.rows[0];
      } catch(err) {
        throw new dbError(`Error when trying to create user with email ${user.email}.`, err);
      }
}

export async function fetchUserByEmail(email) {
  try {
      const results = await pool.query(
          `SELECT * FROM user_account WHERE email = $1`, 
          [email]
      );    
      return results.rows[0];
    } catch(err) {
      throw new dbError(`Error when trying to fetch user with email ${email}.`, err);
    }
}