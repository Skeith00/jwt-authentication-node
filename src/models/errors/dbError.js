import customError from './customError.js'

export default class DBError extends customError {

    constructor(message, err) {
        super();
        this.name = this.constructor.name
        super.message = message.concat(this.#resolveError(err));
    }

    #resolveError(err) {
        if (err.code == '23505') {
            super.httpstatus = 400;
            return ' Key already exists.';
        } else if (err.code == '23502') {
            super.httpstatus = 400;
            return ' Mandatory fields are empty.';
        } else {
            return '';
        }
    }  
}