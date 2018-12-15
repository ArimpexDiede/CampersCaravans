const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: './src/scripts/main.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Account.html',
            filename: 'Account.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Advertentie.html',
            filename: 'Advertentie.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Categories.html',
            filename: 'Categories.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Bedrijfspagina.html',
            filename: 'Bedrijfspagina.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Details.html',
            filename: 'Details.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Done.html',
            filename: 'Done.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Home.html',
            filename: 'Home.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Login.html',
            filename: 'Login.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Register.html',
            filename: 'Register.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/UitgebreidZoeken.html',
            filename: 'UitgebreidZoeken.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/Zoeken.html',
            filename: 'Zoeken.html',
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            title: 'Camperscaravans',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'head'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets/resources', to: 'resources' }
        ])
    ],
    output: {
        filename: 'scripts/site-13-12-18.js',
        library: '[name]',
        libraryTarget: 'var',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'arimpex_common',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',    // where the fonts will go
                            publicPath: '/screenscc/images',       // override the default path
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //outputPath: __dirname,    // where the fonts will go
                            outputPath: 'fonts',    // where the fonts will go
                            publicPath: '/screenscc/fonts',       // override the default path
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            //{
            //    type: 'javascript/auto',
            //    test: /\.json$/,
            //    use: [
            //        {
            //            loader: 'file-loader',
            //            options: {
            //                outputPath: 'resources',    // where the fonts will go
            //                publicPath: 'resources',       // override the default path
            //                name: '[name].[ext]'
            //            }
            //        }
            //    ]
            //},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};
