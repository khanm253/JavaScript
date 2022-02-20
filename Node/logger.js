
const EventEmiter = require('events');

class Logger extends EventEmiter{
    log(){
        this.emit('Hello');
    }
}



module.exports.log = Logger;