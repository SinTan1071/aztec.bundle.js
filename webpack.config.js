const path = require('path');
// const webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: [
        'babel-polyfill',
        './src/index.js',
    ],
    mode: 'production',
    module: {
        rules: [
            // {
            //     test: /\.dat$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'database/[name].[ext]',
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.wasm$/,
                type: 'webassembly/experimental',
            },
        ],
    },
    node: {
        fs: 'empty',
    },
    optimization: {
        occurrenceOrder: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'aztec.bundle.js',
    },
    target: 'web',
};
