import { encrypt } from '../utils/cryptoUtils.js'

export class User {

    constructor(email, password, firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email= email;
        //Encrypt user password
        this.password = encrypt(password);
    }
}