var path = require('path');

(function () {
    "use strict";
    
    module.exports = {
        entry: {
            bundle: './content/components/base.jsx'
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
                    test: /\.jpg$|.webp$/, 
                    loader: "url-loader" 
                },
                { 
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader'
                }
            ]
        }
    };
}());