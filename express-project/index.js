const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const userdetails = require('./routes/interview/userdetails');
const files = require('./routes/interview/files');
const render = require('./routes/interview/render');
const { req, res } = require('./routes/interview/reqRes');
const sessions = require('./routes/interview/sessions');
const login = require('./routes/project/login');
const logout = require('./routes/project/logout');
const dashboard = require('./routes/project/dashboard');
const streaming = require('./routes/project/streaming');

// init express
const app = express();

// view engines
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug')


// body parser
app.use(express.urlencoded({ extended: false}),express.json());
app.use(cookieParser());
app.use(session({
    secret: 'it is a screat'
}))

//  serve static files
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "templates")));

// project routes
app.use('/',req);
app.use('/',res);
app.use('/', userdetails);
app.use('/', files);
app.use('/',render);
app.use('/', sessions);
app.use('/', login);
app.use('/',logout);
app.use('/',dashboard);
app.use('/',streaming)


//  create a server
app.listen(9000, ()=> {
    console.log('server started at 9000');
})