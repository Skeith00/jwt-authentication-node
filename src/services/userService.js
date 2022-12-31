import * as userRepository from "../repositories/userRepository.js";
import * as jwtService from "./jwtService.js";
import { isValidPassword }  from "../utils/cryptoUtils.js";

/**
 * Adds a new user in the DB, and generates a new token
 * 
 * @param {string} email 
 * @param {string} password 
 * @return {string} user token
 */
export async function registerUser(user) {
    await createUser(user);
    return jwtService.createToken(user);
}

/**
 * Validates that the user is in the system, and generates a new token
 * 
 * @param {string} email 
 * @param {string} password 
 * @return {string} user token
 */
export async function validateUser(email, password) {

    // Validate if user exist in our database
    const user = await userRepository.fetchUserByEmail(email.toLowerCase());

    if (user && isValidPassword(password, user.password)) {
        // Create token
        return jwtService.createToken(user)
    }    
}

async function createUser(user) {
    let createdUser = await userRepository.createUser(user);
    console.log(`User created with ID: ${createdUser.id}`);
    return createdUser;
}