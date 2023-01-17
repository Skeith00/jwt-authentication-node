import * as userRepository from "../repositories/userRepository.js";
import * as jwtService from "./jwtService.js";
import { isValidPassword }  from "../utils/cryptoUtils.js";
import { runTransaction }  from "../config/transaction.js";

/**
 * Adds a new user in the DB, and generates a new token
 * 
 * @param {User} user object
 * @return {Promise<string>} user token
 */
export async function registerUser(user) {
    return await runTransaction(async client =>  {
        let createdUser = await userRepository.createUser(user, client);
        let token = jwtService.createToken(user);
        console.log(`User created with ID: ${createdUser.id}`);
        return token;
    })
}

/**
 * Validates that the user is in the system, and generates a new token
 * 
 * @param {string} email 
 * @param {string} password 
 * @return  {Promise<string>} user token
 */
export async function signInUser(email, password) {

    // Validate if user exist in our database
    const user = await userRepository.fetchUserByEmail(email.toLowerCase());

    if (user && isValidPassword(password, user.password)) {
        // Create token
        return jwtService.createToken(user)
    }    
}