//const { pool } = require.main.require("./config/database");
import { pool } from "../config/database.js";
import { DBError }  from "../models/errors/DBError.js";

export async function createUser(user){

    const results = await pool.query( 
            `INSERT INTO user_account(email, password, name, last_name) VALUES($1, crypt($2, gen_salt('bf')), $3, $4) RETURNING id`, 
            [user.email, user.password, user.firstName, user.lastName]
        );    
    return results.rows[0];    
        /*.then((results) => {
            console.log(`User added with ID: ${results.rows[0].id}`);

        })
        .catch((err) => {
            console.error(`Error when trying to create user with email ${user.email}.`, err.stack);
            throw new DBError(400, `Error when trying to create user with email ${user.email}.`);
        })*/
}