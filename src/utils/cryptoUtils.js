import bcrypt from "bcryptjs";

export function encrypt(text) {
    return bcrypt.hashSync(text, 10);
}