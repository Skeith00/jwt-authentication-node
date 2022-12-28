import dbError  from "../models/errors/dbError.js";

// https://scoutapm.com/blog/express-error-handling
export function errorLogger(error, req, res, next) { // for logging errors
    console.error(error)
    next(error) // forward to next middleware
}
  
export function errorResponder(error, req, res, next) { 
    if (error instanceof dbError) {
        res.status(error.httpstatus).send(error.message) // generic handler
    } else {
        res.status(500).send('Server Error.') // generic handler
        //next(error) // forwarding exceptional case to fail-safe middleware
    }
}