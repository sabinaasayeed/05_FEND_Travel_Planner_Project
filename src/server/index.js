var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

let trips = [];

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3040, function() {
    //console.log('Example app listening on port 3040!')
})


// POST route
app.post('/save', addTrip);

function addTrip(req, res) {
    //console.log('received save request: addTrip');
    trips.push(req.body)
        //console.log(trips);
    res.send(trips);
};


module.exports = app;
