
/* Importing the mongoose module. */
const mongoose = require('mongoose');
 
/* Connecting to the database. */
mongoose.connect('mongodb://localhost/polling_api');

 /* Creating a connection to the database. */
const db = mongoose.connection;
 
/* This is a callback function that is called when the connection is opened. */
db.on('error', console.error.bind(console, 'Error while connecting to mongo db'));
 
/* A callback function that is called when the connection is opened. */
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
})
 
/* Exporting the db object so that it can be used in other files. */
module.exports = db;