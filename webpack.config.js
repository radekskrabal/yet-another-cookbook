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
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ["babel-loader", "ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "react-router-dom": "ReactRouterDOM",
        "history": "History",
        "redux": "Redux",
        "react-redux": "ReactRedux"
    }
};

module.exports = config;