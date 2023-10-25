// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'index.js',
        library: "Cthulhu",
        libraryTarget: "umd",
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
            }
        ],
    },
    resolve:{
        extensions:['.js']
    }
};

module.exports = () => {

    config.mode = (isProduction)?'production':'development';

    return config;
};
