const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/MovieDBex';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});

const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...');
});

app.listen(3000, () => {
    console.log('Server started');
});