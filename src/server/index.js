const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

console.log(`Your API key is ${process.env.API_KEY}`);

var aylien = require("aylien_textapi");

// set aylien API credentias
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile('/dist/index.html', { root: __dirname + '/../..' })
        //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3040, function() {
    console.log('Example app listening on port 3040!')
})

app.post('/test', function(req, res) {
    console.log("POST /test is called");
    console.log(req.body.text);

    textapi.sentiment({
        url: req.body.url
    }, function(error, response) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(response);
        res.json(response);
    });


})