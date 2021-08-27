const express = require('express');
const app = express();
// Required to access .env variables
require('dotenv').config();
// Required to parse POST data
const bodyParser = require('body-parser');

// Exercise 1. Meet the Node Console
console.log("Hello World");

// Exercise 2 & 3: Start a Working Express Server & Serve an HTML File
app.get('/', (req, res) => {
    const path = __dirname + '/views/index.html'
    res.sendFile(path);
  });

// Exercise 4: Serve Static Assets
app.use('/public', express.static(__dirname + "/public"));

// Exercise 5 & 6: Serve JSON on a Specific Route & Use the .env File
app.get("/json", (req, res) => {
    const message = "Hello json";
    const data = (process.env.MESSAGE_STYLE === "uppercase") ? message.toUpperCase() : message;
    res.json({"message": data});
 });

// Exercise 7: Implement a Root-Level Request Logger Middleware
app.use('/', (req,res,next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

// Exercise 8: Chain Middleware to Create a Time Server
app.get('/now', (req,res,next) => {
    req.time = new Date().toString();
    next();
 }, (req,res) =>{
    res.json({time:req.time});
 });

 // Exercise 9: Get Route Parameter Input from the Client
 app.get("/:word/echo", (req,res) =>{
    res.json({echo:req.params.word});
 });

// Exercise 10: Get Query Parameter Input from the Client
app.get('/name', (req,res) => {
    const {first:firstname, last:lastname } = req.query;
    res.json({
        name: `${firstname} ${lastname}`
    });
});

// Exercise 11: Use body=parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended:false}));

// Exercise 12: Get Data from POST Requests
app.post('/name', (req,res) => {
    const {first:firstname, last:lastname } = req.body;
    res.json({
        name:`${firstname} ${lastname}`
    });
});

// npm run start































 module.exports = app;
