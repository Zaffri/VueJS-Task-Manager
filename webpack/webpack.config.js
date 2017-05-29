/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 1.1.1
 * @since 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

module.exports = {
    entry: '../public/js/main.js',
    output: {
        filename: '../public/js/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
 
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};