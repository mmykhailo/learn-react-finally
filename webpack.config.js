let conf = {

    module:{
        rules: [

            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }],
            },

        ],

    },
    alias: {
        'components': path.resolve('src/components'), // This is ours!!
        'react-native': 'react-native-web'
    },
    devServer:{
        proxy:{
            "/api": "http://localhost:3001/api/lib"
        }
    }


};

