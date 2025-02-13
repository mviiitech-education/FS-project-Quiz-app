const express = require('express');

const sampleRouter = express.Router();

sampleRouter.use("/",(req,res) => {
    res.status(200).json({ name: 'avinash'});
});

module.exports = sampleRouter;