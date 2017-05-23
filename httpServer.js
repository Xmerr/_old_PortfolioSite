var path = require('path');
var ps = require('ps-node');
var apps = require('./apps.js');

process.env = require('../process.env.json');

module.export = (() => {
    var express = require('express'),
        app = express();

    app.use(process.env.dndImageLocation, express.static(path.join(__dirname + '/../bots/files'),{
        index: false,
        extensions: ['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG', 'gif', 'GIF', 'webp', 'html']
    }));
    app.use('/public', express.static(path.join(__dirname + '/.public'),{
        index: false,
        extensions: ['js', 'html']
    }));
    
    app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname + '/index.html'));
    });
    
    app.listen(process.env.port);
    console.log(`website listening on port ${process.env.port}`);
    
    for(var i in apps) {
        var name = i;
        (name => {
            ps.lookup({
                command: 'node',
                arguments: apps[name]
            }, (err, resultList) => {
                if(err){
                    throw err;
                }
                
                if(resultList.length > 0) {
                    console.log(`${name} Status: Running`);
                }
                else {
                    console.log(`${name} Status: Not Running`);
                }
            });
        })(name);
    }
})();