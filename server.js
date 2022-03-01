const express = require('express')
const app = express()

var port = 5000
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
})

app.use(function(req, res){
    res.status(404).send('404! NOT FOUND')
});

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flip/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
});

app.get('/app/flips/:number', (req, res) => {
	//Some
	//expressions
	//go
	//here
});

app.get('/app/flip/call/:bet', (req, res) => {
	//Some
	//expressions
	//go
	//here
});