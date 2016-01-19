var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    debug: true,
    verbose: true,
    displayErrorDetails: true,
    context: __dirname,
    stats: {
        colors: true,
        reasons: true
    },
    entry: {
        'kendo-app': ['./src/kendo/app-demo.ts']
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.json']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    noParse: [
        /rtts_assert\/src\/rtts_assert/,
        /reflect-metadata/
    ],
    output: {
        path: './public/javascript/kendo/',
        filename: 'app-demo-bundle.js',
        sourceMapFilename: '[name]-bundle.js.map',
        chunkFilename: '[id]-bundle.chunk.js'
    }
};