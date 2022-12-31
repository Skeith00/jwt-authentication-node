import bcrypt from "bcryptjs";

export function encrypt(text) {
    return bcrypt.hashSync(text, 10);
}

export function isValidPassword(inputPassword, storedPassword) {
    return bcrypt.compareSync(inputPassword, storedPassword)
}