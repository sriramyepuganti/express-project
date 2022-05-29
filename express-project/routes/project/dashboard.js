const Router = require('express').Router();
const auth = require('../../services/auth');




module.exports = Router.get('/dashboard', auth,(req,res)=> {
    try {
            
        res.json('helo')
    } catch(e) {
        res.sendStatus(500);
    }
});

