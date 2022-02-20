
// const EventEmiter = require('events');
// const Logger =  require('./logger');

// const logger = new Logger.log();

// logger.on('Hello', () => {
//     console.log('Caught...');
// })

// logger.log('Hello');

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello');
        res.end()
    }
});

server.listen(3000);

console.log('Listening to port 3000...');