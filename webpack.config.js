var path = require('path'),
    webpack = require('webpack');

(function () {
    "use strict";
    
    module.exports = {
        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom',
                PropTypes: 'prop-types'
            })
        ],
        
        entry: {
            site: './content/components/base.jsx'
        },
        
        output: {
            path: path.join(__dirname, '.public'),
            filename: '[name].bundle.js'
        },
        
        resolve: {
            alias: {
                
            },
            extensions: ['.jsx', '.js', '.scss', '.jpeg', '.jpg', '.png', '.gif']
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
                    test: /\.jpeg$|\.jpg$|\.webp$/, 
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