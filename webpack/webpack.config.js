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