const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.write('Hi');
        res.end()
    }
});

server.listen(3000)
console.log('Listening to port...');