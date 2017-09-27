var path = require('path');

var express = require('express'),
    app = express(),
    socketFiles = require('./socketFiles.js');
    
app.use(require('prerender-node'));
    
app.use('/public', express.static(path.join(__dirname, '.public'),{
    index: false,
    extensions: ['js', 'html']
}));

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports.app = app;
module.exports.io = io => {
    io.on('connection', function(socket) {
        socket.clientData = [];
        socket.clientData[socket.handshake.issued] = {};
        socketFiles(socket);
    });
};