const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
 
// app.use(bodyParser.json());
// use express router
app.use(express.json());
 
// app.use(express.urlencoded(
//     {
//         extended: true
//     }
// ));

app.use('/', require("./routes"));
 
app.listen(port, function(err, res){
    if(err){
        console.log("Error", err);
        return;
    }
    console.log(`Server is running on port ${port}`);
})
