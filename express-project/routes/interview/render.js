const path = require('path');

const Router = require('express').Router();


module.exports = Router.get('/render', (req,res)=> {
    res.render('pug');
    res.end();
});