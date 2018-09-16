var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello JH Super Code123456 and Azure Web Apps! 9/15/2018</h1>');
}).listen(process.env.PORT);