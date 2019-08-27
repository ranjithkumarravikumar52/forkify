//for basic web pack configuration - bundles all js files into one big bundle
//zero configuration is supported which is enough for small apps, but not for our use-case

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

//module.export is similar to node.js syntax - we are exporting an object
//in webpack there are four main components - entry point, output, loaders and plugins
module.exports = {
    entry: './src/js/index.js', //here . means current folder
    output : { //we pass an object to output
        path: path.resolve(__dirname, 'dist'), //path here is absolute path, which we need node package called path
        filename: "js/bundle.js"
    },
    //configuring dev server
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new htmlWebpackPlugin({
            //to copy our index.html from source to dist and also include script for js bundle
            //won't be visible in dist folder when we run in development mode, it will simply stream to the server
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    //loaders in webpack to load/import all kinds of different files and process them
    //for our use-case converting ES6 to ES5
    module: {
        rules: [
            //rules of all loaders and for each loader we need an object
            {
                test: /\.js$/, //regular expression that ends with .js
                exclude: /node_modules/, //exclude all the files in node_modules, this is a regular expression too
                use: {
                    loader: "babel-loader" //the npm we have installed before
                }
            }
        ]
    }
};