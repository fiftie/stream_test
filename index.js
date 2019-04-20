var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'stream')));
app.get('/' , function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/test' , function(req, res){
  res.sendFile(__dirname + '/test.htm');
});

http.listen(PORT, function(){
  console.log('server listening. Port:' + PORT);
});