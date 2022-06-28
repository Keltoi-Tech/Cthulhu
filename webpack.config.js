const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index:'./src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Cthulhu',
        })
    ],    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean:true
    },
    devServer:{
      host:'localhost',
      port:8080,
      historyApiFallback:true
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["css-loader"]
        },
      ],
    },
  };