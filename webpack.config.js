module.exports = {
    entry: "./src/App.jsx",
    output: {
        path: __dirname + '/public/static/build/',
        filename: "bundle.js",
        publicPath: "static/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less!autoprefixer-loader"},
            { test: /\.gif$/, loader: "url?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.(woff|ttf|eot)/, loader: "url?limit=1" },

            { test: /\.jsx$/, loader: "react-hot!traceur?sourceMaps&runtime!jshint!jsx", exclude: [/node_modules\/material-ui/]},
            { test: /\.jsx$/, loader: "jsx?harmony", include: [/node_modules\/material-ui/]},

            { test: /\.js$/, loader: "jshint!traceur?sourceMaps&runtime", exclude: [/node_modules/, /www/] },

            {test: /\.po$/, loader: 'json!po'},

            { test: /\.json$/, loader: "json"}
        ]
    },
    jshint: require('./webpack.jshint.json')
};