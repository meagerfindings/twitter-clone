const path = require('path');

module.exports = {
    entry: './app/assets/frontend/main.jsx',
    output: {
        path: path.resolve(__dirname, 'app/assets/javascripts/'),
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
