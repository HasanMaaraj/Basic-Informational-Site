const http = require('http');
const fs = require('fs');

const getResponseOptions = (url) => {
    let filePath = undefined;
    let statusCode = undefined;

    if (url === '/') {
        filePath = './index.html';
        statusCode = 200;
    } else if (url === '/about') {
        filePath = './about.html';
        statusCode = 200;
    } else if (url === '/contact-me') {
        filePath = './contact-me.html';
        statusCode = 200;
    } else {
        filePath = './404.html';
        statusCode = 404;
    }
    return [filePath, statusCode];
}

const server = http.createServer((req, res) => {

    const [filePath, statusCode] = getResponseOptions(req.url)

    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('500 Internal server error');
        }
        res.writeHead(statusCode, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    })
})

server.listen(8080)