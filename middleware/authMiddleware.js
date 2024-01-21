const JWT = require("jsonwebtoken");

const authMiddlewareHandler = async (req, res, next) => {
    try {
        console.log("Req header is ", req.headers)
        let token;
        let authHeader = req.headers.Authorization;
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
                if (err) {
                    res.status(401).send({
                        success: false,
                        message: "Authorization Error",
                    })
                }
                else {
                    req.body.id = decode.id;
                    next();
                }
            })
        }
        else {
            res.status(401).send({
                success: false,
                message: "Authorization header missing or invalid format",
            });
        }
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "Error in Auth api",
        })
        console.log(e)
    }
}

module.exports = authMiddlewareHandler