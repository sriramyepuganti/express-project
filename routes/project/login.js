const jwt = require('jsonwebtoken');

const Router = require('express').Router();


module.exports = Router.post('/login', (req,res)=> {
    try {
            const { email, password } = req.body;
            if( email == "sri@gmail.com" && password == 'password') {
                res.cookie("loggedIn", true).cookie("token", jwt.sign({email}, "it is a sss"))
                .json({
                    code: 200,
                    message: 'logged in succesfully'
                })
            }

    } catch(e) {
        res.sendStatus(500);
    }
});