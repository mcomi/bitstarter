var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs'); 

app.get('/', function(request, response) {
  var readIndex = fs.readFileSync('index.html', function(err,data){
    if(err) throw err;
    console.log(data);
  });
  buf = new Buffer(256);
  console.log(buf.toString('utf8',0,readIndex);
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
