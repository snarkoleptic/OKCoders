const nodecron = require('node-cron')

//second, minute, hour, day of month, month, day of week
nodecron.schedule('* * * * * *',() => {
    console.log('Hello, world!');
});