// This doesn't run in  browser .
// It only runs on system with the help of nodejs

const path = require('path');  // From node library
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist/assets'),   // __dirname to go to project root
        filename:'bundle.js'
    },
    // devServer serves virtual file
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), // folder to serve to browser
        publicPath:'/assets/' // path from inside 'dist' folder
    },
    // to run babel
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                   presets: ['@babel/preset-env']
                }    
            }
        }]
    }
};  