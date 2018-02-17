var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    target: "electron",
    devtool: "source-map",
    node: {
        __dirname: false,
        __filename: false,
    },
    entry:
        {
            program: "./src/Program.js",
            index: "./src/Index.tsx"
        },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/, loader: "file-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "src/Index.html",
            to: "Index.html"
        }])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
    },
    externals: {}
};