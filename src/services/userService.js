import * as userrepository from "../repositories/userRepository.js";
import bcrypt from "bcryptjs";
import {User}  from "../models/user.js";

export async function createUser(firstName, lastName, email, password) {

    //Encrypt user password
    var encryptedPassword = bcrypt.hashSync(password, 10);

    // Create user in our database
    const user = new User(
      email,
      encryptedPassword,
      firstName,
      lastName
    );

    const createdUser = await userrepository.createUser(user);
    return createdUser.id;
}