
const EventEmiter = require('events');
const port  = process.env.PORT || 3000;
class Logger extends EventEmiter{
    log(){
        this.emit('Hello');
    }
}



module.exports.log = Logger;
module.exports.port = port;