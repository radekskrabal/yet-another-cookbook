const path = require('path');

const config = {
    entry: [
        path.join(__dirname, './src/app.tsx'),
    ],
    output: {
        filename: "bundle.js",
        publicPath: './dist',
        path: path.resolve("dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", '.jsx'],
        modulesDirectories: ['./src', './node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [ "babel", "ts-loader" ],
                exclude: /node_modules/
            }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "history": "History",
        "redux": "Redux",
        "react-redux": "ReactRedux"
    }
};

module.exports = config;