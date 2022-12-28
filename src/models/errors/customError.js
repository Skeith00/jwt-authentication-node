export default class CustomError extends Error {

    constructor() {
        super()
        this.message = '';
        this.httpstatus = 500;
    }

}