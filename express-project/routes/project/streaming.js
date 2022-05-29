const Router = require('express').Router();
const fs = require('fs');
const path = require('path');

module.exports = Router.get('/video', (req, res) => {
    const range = req.headers.range;
    const videoPath = path.join(__dirname, "../../assets/bigbuck.mp4");
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 6;
    if (range) {
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end - start + 1;

        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };
        res.writeHead(206, headers);
        const videoStream = fs.createReadStream(videoPath, {
            start,
            end
        });
        videoStream.pipe(res);
    } else {
        const head = {
            'Content-Length': videoSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }


});