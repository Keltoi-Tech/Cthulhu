const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index:['./src/index.js','./src/css/index.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Cthulhu',
          template:'./src/index.html',
          inject:'body'
        })
    ],    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean:true,
      publicPath:'/'
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
        {
          test: /\.(svg|png|jpe?g|gif)$/i,
          use: 'file-loader'
        }
      ],
    },
  };