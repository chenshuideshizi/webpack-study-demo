const path = require('path')
const MyWebpackPlugin = require('../src/plugins/my-webpack-plugin/index.js')

module.exports = {
    context: path.resolve(__dirname, '../'),
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                use: [
                    // { // 自定义loader: 字符串替换
                    //     loader: 'replace-loader', //
                    //     options: {
                    //         name: 'Webpack5 Loader'
                    //     }
                    // },
                    { // 自定义loader: i18n
                        loader: 'i18n-loader',
                        options: {
                            locale: 'zh'
                        }
                    }
                ]
            },
            { 
                test: /\.js$/,
                use: [

                ]
            }
        ]
    },
    resolveLoader: {
        modules: ['./src/loaders']
    },
    plugins: [
        new MyWebpackPlugin()
    ]
}