var express = require('express');

var server = express();

server.use('/bower_components',  express.static(__dirname+'/bower_components'));
server.use('/css',  express.static(__dirname+'/css'));
server.use('/images',  express.static(__dirname+'/images'));
server.use('/font',  express.static(__dirname+'/font'));
server.use('/js',  express.static(__dirname+'/js'));

server.get('/', function(request, response) {
  console.log('GET / - Render '+__dirname+'/index.html');
  response.sendFile(__dirname+'/index.html');
});

server.get('/about', function(request, response) {
  console.log('GET /about - Render '+__dirname+'/about.html');
  response.sendFile(__dirname+'/about.html');
});

server.listen(8080, () => console.log('Example app listening on port 8080!'));
