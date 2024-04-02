const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = './index.html';
        responseStatus = 200;
    } else if (req.url === '/about') {
        const filePath = './about.html';
        responseStatus = 200;
    } else if (req.url === '/contact-me') {
        const filePath = './contact-me.html';
        responseStatus = 200;
    } else {
        const filePath = './404.html';
        responseStatus = 404;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('500 Internal server error');
        }
        res.writeHead(responseStatus, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    })
})

server.listen(8080)