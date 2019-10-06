const express = require('express');
const bodyParser = require('body-parser');

//Configuting the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...',err);
    process.exit();
});
//Create Express app
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

//define a simple route
app.get('/', (req, res) => {
    res.json({"Message": "Welcome to EasyNotes Application. Take notes quickly. Organize and keep track of all your notes."});
});

//listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});