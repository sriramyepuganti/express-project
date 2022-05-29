const Router = require('express').Router();
const upload = require('../../services/multer');

module.exports = Router.post('/files', upload.single('file'), async (req, res) => {
    try {
      
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });