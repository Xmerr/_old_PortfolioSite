var path = require('path');

(function () {
    "use strict";
    
    module.exports = {
        entry: {
            bundle: './components/base.jsx'
        },
        output: {
            path: path.join(__dirname, '.public'),
            filename: '[name].js'
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                {
                    test: /\.sass$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                { 
                    test: /\.css$/, 
                    loader: "style-loader!css-loader" 
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    query:
                        {
                            presets: ['es2015', 'react']
                        }
                },
                { 
                    test: /\.png$/, 
                    loader: "url-loader?limit=100000" 
                },
                { 
                    test: /\.jpg$/, 
                    loader: "file-loader" 
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'file-loader'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                }
            ]
        }
    };
}());