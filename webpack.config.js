/**
 * Created by intelligrape on 3/5/17.
 */
var path = require("path");
const config = {
    entry : './src/main.js' ,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};

module.exports = config;