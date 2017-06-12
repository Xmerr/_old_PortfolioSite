var path = require('path');

process.env = require('../process.env.json');

(() => {
    var os = require('os');
    if(os.hostname().indexOf('xmer') !== -1) {
        // Determine if it's my test server or not
        process.env.port = 8080;
    }
})();

module.export = (() => {
    var express = require('express'),
        subdomain = require('express-subdomain'),
        app = express(),
        dndRouter = require('./dndShortcut/Router.js')(express, app);
        
    app.use(subdomain('dnd.*', dndRouter));

    app.use(process.env.dndImageLocation, express.static(path.join(__dirname, 'uploadedImages'),{
        index: false,
        extensions: ['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG', 'gif', 'GIF', 'webp', 'html']
    }));
    
    app.use('/public', express.static(path.join(__dirname, '.public'),{
        index: false,
        extensions: ['js', 'html']
    }));
    
    app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname + '/index.html'));
    });
    
    app.listen(process.env.port);
    console.log(`website listening on port ${process.env.port}`);
})();