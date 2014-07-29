var _ = require('underscore'),
  express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server);

//app.get('/', function (req, res) {
//  res.sendfile(__dirname + '/client/hotdogs.html');
//});

app.use(express.static(__dirname+'/client'));

io.on('connection', function (socket) {
  console.log("socket " + socket.id + " connected");
  socket.on('disconnect', function () {
    console.log("socket " + socket.id + " disconnected");
  });
  socket.on('broadcast', function (message) {
    socket.broadcast.emit('broadcast', message);
  });
});

server.listen(80);
