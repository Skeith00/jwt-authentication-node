import * as jwtService from '../services/jwtService.js'

export function verifyToken(req, res, next) {
    const token = req.headers["Authorization"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwtService.verifyToken(token);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}
  