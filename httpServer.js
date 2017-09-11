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
        app = express();
        
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