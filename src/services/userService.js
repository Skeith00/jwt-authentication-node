import * as userRepository from "../repositories/userRepository.js";

export async function createUser(user) {
    let createdUserId = await userRepository.createUser(user);
    console.log(`User created with ID: ${createdUserId}`);
    return createdUserId;
}