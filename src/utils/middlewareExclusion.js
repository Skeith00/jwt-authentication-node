export function unless(paths, middleware) {
    return (req, res, next) => {
        if (paths.includes(req.path)) {
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
};