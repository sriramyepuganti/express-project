const Router = require('express').Router();


module.exports = Router.get('/logout', (req,res)=> {
    try {
            res.clearCookie("token");
            res.sendStatus(200);
    } catch(e) {
        res.sendStatus(500);
    }
});