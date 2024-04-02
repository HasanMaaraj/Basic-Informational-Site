const http = require('http');
const fs = require('fs');


const sendPage = (url) => {

}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = './index.html';
        responseStatus = 200;
    } else if (req.url === '/about') {
        const filePath = './about.html';
        responseStatus = 200;
    }
    fs.readFile(filePath, (error, data) => {
        res.writeHead(responseStatus, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    })
})