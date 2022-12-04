import * as userrepository from "../repositories/userRepository.js";

export function createUser(request, response) {
    userrepository.createUser(request, response);
}