

const Router = require('express').Router();

const req = Router.get('/req', (req, res) => {
    console.log({
        app: req.app,
        headers: req.headers,
        baseUrl: req.baseUrl,
        body: req.body,
        cookies: req.cookies,
        fresh: req.fresh,
        hostname: req.hostname,
        ip: req.ip,
        ips: req.ips,
        method: req.method,
        originalurl: req.originalUrl,
        params: req.params,
        path: req.path,
        protocol: req.protocol,
        query: req.query,
        route: req.route,
        secure: req.secure,
        signedcookies: req.signedCookies,
        stale: req.stale,
        subdomain: req.subdomains,
        xhr: req.xhr,
    });

    // Accept: text/html
    req.accepts('html')
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html')
    // => "html"
    req.accepts('text/html')
    // => "text/html"
    req.accepts(['json', 'text'])
    // => "json"
    console.log(req.accepts('application/json'))
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png')
    req.accepts('png')
    // => false

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json'])
    // => "json"
    req.is("application/json")
    res.end();
});

const res = Router.get('/res', (req,res)=> {
    console.log('header-sent',res.headersSent);
    res.append('key',"test it");
    res.cookie('x-api-key',"secret"), {httpOnly: true, secure: true};
    res.download('../assets/Test.pdf');
    res.sendStatus(200);
    console.log('header-sent',res.headersSent);
})

module.exports = {
    req, res
}