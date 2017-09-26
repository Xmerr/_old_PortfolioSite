var path = require('path');

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    socketFiles = require('./socketFiles.js');
    
var io = require('socket.io')(server);
app.use(require('prerender-node'));
    
app.use('/public', express.static(path.join(__dirname, '.public'),{
    index: false,
    extensions: ['js', 'html']
}));

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket) {
    socket.clientData = [];
    socket.clientData[socket.handshake.issued] = {};
    socketFiles(socket);
});

module.exports = app;