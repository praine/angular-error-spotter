const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "app": "./src/main.ts",
        "vendor": "./src/vendor.ts",
        "polyfill": "./src/polyfill.ts"
    },

    output: {
        path: "/",
        publicPath: "/dist/",
        filename: "[name].js",
        chunkFilename: "[id].[chunkhash].chunk.js"
    },

    devServer: {
        port: 3000,
        compress: true,
        inline: false
    },

    watchOptions: {
        aggregateTimeout: 10000,
        ignored: /node_modules/
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader",
                options: {
                    emitErrors: true,
                    failOnHint: true
                }
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            useCache: true,
                            configFileName: "tsconfig.json"
                        }
                    },
                    {
                        loader: "angular2-template-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: false
                }
            },
            {
                test: /\.(eot(\?)?|ico(\?)?|otf(\?)?|ttf(\?)?|woff(\?)?|woff2(\?)?)/,
                loader: "file-loader",
                options: {
                    name: "assets/[name].[hash].[ext]"
                }
            },
            {
                test: /\.(mp3|mp4)/,
                loader: "file-loader",
                options: {
                    name: "assets/[name].[ext]"
                }
            },
            {
                test: /\.(xlf|xmb|xtb)$/,
                loader: "raw-loader"
            },
            {
                test: /\.(gif|jpe?g|png|svg(\?)?)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[name].[hash].[ext]"
                        }
                    }
                ]

            },
            {
                test: /\.css$/,
                exclude: [/app(\\|\/)/],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                import: true,
                                url: true,
                                minimize: true,
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                include: [/app(\\|\/)/],
                loader: "raw-loader"
            },
            {
                test: /\.css\.map$/,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]"
                }
            },
            {
                test: /\.fla$/,
                loader: "null-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            __dirname,
            {}
        ),
        new ExtractTextPlugin("[name].css")
    ]
};