var path = require('path');

process.env = {
    port: 80
};

(() => {
    var os = require('os');
    if(os.hostname().indexOf('xmer') !== -1) {
        // Determine if it's my test server or not
        process.env.port = 8080;
    }
})();

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

server.listen(process.env.port);

io.on('connection', function(socket) {
    socket.clientData = [];
    socket.clientData[socket.handshake.issued] = {};
    socketFiles(socket);
});

module.exports = server;