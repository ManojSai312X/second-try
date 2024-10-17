const express = require('express')
const app = express()
const mongoose = require('mongoose')
PORT = 5000;

DB_URL ='mongodb://localhost:27017/Hospital';
mongoose.connect(DB_URL);
const conn = mongoose.connection;

conn.once('open',() => {
    console.log('succesfully database connected');

} );
conn.on('error',() => {
    console.log('error connection');
    process.exit();
} );


