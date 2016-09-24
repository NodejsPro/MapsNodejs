var io  = require('socket.io');  
var socket = new io.Socket('localhost', 8000);

socket.on('connect', function () {
  console.log('yay, connected!');
  socket.send('hi there!');
});

socket.on('message', function (msg) {
  console.log('a new message came in: ' + JSON.stringify(msg));
});

socket.connect();