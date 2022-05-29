const upload = require('../../services/multer');

const Router = require('express').Router();

module.exports = Router.post('/userdetails',  upload.array(),(req,res)=> {
    try {
        const body = req.body;
        res.json(body);
    } catch(e) {
        return res.status(500);
    }
})