const jwt = require("jsonwebtoken");

function auth(req,res,next) {
    const token = req.cookies.token;
    if(token) {
        const isAuth = jwt.verify(token,"it is a sss");
        if(isAuth.email == 'sri@gmail.com') {
            next();
        } else {
            res.send(401);
        }
    } else {
        res.send(401);
    }
}

module.exports = auth;