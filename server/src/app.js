const express = require('express');
const bodyParser = require('body-parser');
const sampleRouter = require('./routes/sample.routes');

const app = express()

// middle ware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/',(req,res)=> {
    const data = {
        a: 10,
        b: 20
    }
    res.status(200).json(data);
})

module.exports = app;