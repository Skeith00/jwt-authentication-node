import CustomError from './customError.js'

export default class DBError extends CustomError {

    constructor(message, err) {
        super();
        this.name = this.constructor.name
        this.#resolveError(message, err);
    }

    #resolveError(message, err) {
        if (err.code == '23505') {
            super.httpstatus = 400;
            super.message = message.concat(' Key already exists.');
        } else if (err.code == '23502') {
            super.httpstatus = 400;
            super.message = message.concat(' Mandatory fields are empty.');
        } else {
            super.httpstatus = 500;
            super.message = message;
        }
    }  
}