
const htmlWebPack       = require('html-webpack-plugin');
const MiniCssExtract    = require("mini-css-extract-plugin");
const CopyPlugin        = require("copy-webpack-plugin");

module.exports = {
    
    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude:/styles.css$/,
                use: ['style-loader','css-loader' ]
            },
            {
                test:/styles.css$/,
                use:[MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpge?g|gif)$/,
                loader: 'file-loader'
            }

        ]
    },
    
    optimization: {},

    plugins: [
        new htmlWebPack({
            title: 'Mi WebPack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),

        new MiniCssExtract({
            // title: 'Mi WebPack App',
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}