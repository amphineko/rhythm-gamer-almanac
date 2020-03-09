const merge = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')

module.exports = merge(common, {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3100
    },

    devtool: 'inline-source-map',

    mode: 'development'
})
