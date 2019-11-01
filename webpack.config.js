/**
 * Developed By: Bharat Jograna
 * Created on: 12 Oct 2019
 * Configuration: Webpack Config
*/
'use strict';

const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        "babel-polyfill",
        "react-hot-loader/patch",
        "./src/index.js"
    ],
    output: {
        // The build folder.
        path: path.join(__dirname, '/build'),
        // Generated JS file names (with nested folders).
        // There will be one main bundle, and one file per asynchronous chunk.
        // We don't currently advertise code splitting but Webpack supports it.
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[name].[hash:8].chunk.js',
        // We inferred the "public path" (such as / or /my-project) from homepage.
        publicPath: '/',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    devServer: {
        host: '0.0.0.0',
        port: 5000,
        contentBase: './src/index.js',
        compress: true,
        historyApiFallback: true,
        quiet: true
    },
    //give alias name (Original paths)
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Helpers: path.resolve(__dirname, 'src/helpers/'),
            Routes: path.resolve(__dirname, 'src/routes/'),
            Validations: path.resolve(__dirname, 'src/validation/')
        }
    },
    module: {
        rules: [
            //Loader To Load Jsx by default 
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                }]
            },
            //Loader To Load Html Tag
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            //Loader To Load css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            //Loader To Load scss
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            //Loader To Load media files
            {
                test: /\.(png|jpg|jpeg|gif|mp4)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]'
                    }
                }]
            },
            //Loader To Load font files
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon: './public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "static/css/[name].[hash:8].css"
        })
    ]
};