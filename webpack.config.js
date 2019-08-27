//for basic web pack configuration - bundles all js files into one big bundle
//zero configuration is supported which is enough for small apps, but not for our use-case

const path = require('path');

//module.export is similar to node.js syntax - we are exporting an object
//in webpack there are four main components - entry point, output, loaders and plugins
module.exports = {
    entry: './src/js/index.js', //here . means current folder
    output : { //we pass an object to output
        path: path.resolve(__dirname, 'dist/js'), //path here is absolute path, which we need node package called path
        filename: "bundle.js"
    }
};