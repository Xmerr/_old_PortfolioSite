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

module.export = (() => {
    var express = require('express'),
        app = express(),
        socketFiles = require('./socketFiles.js');
        
    app.use(require('prerender-node'));
        
    app.use('/public', express.static(path.join(__dirname, '.public'),{
        index: false,
        extensions: ['js', 'html']
    }));
    
    app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname + '/index.html'));
    });
    
    var server = app.listen(process.env.port);
    var io = require('socket.io')(server);
    
    io.on('connection', function(socket){
        socket.clientData = [];
        socket.clientData[socket.handshake.issued] = {};
        socketFiles(socket);
    });
    
    console.log(`website listening on port ${process.env.port}`);
})();