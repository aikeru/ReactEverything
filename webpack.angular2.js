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
      'angular2': [
            'es6-shim',
            'angular2/bundles/angular2-polyfills',
            'rxjs',
            'reflect-metadata',
            'angular2/core',
            'angular2/platform/browser'
        ],
        'app-demo': ['./src/angular2/app.js']
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json'],
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loader: 'raw' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.js$/, loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    "optional": ["runtime", "es7.decorators", "es7.classProperties"]
                }
            }
        ]
    },
    noParse: [
        /rtts_assert\/src\/rtts_assert/,
        /reflect-metadata/
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'VERSION': '0.0.1'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'angular2',
            minChunks: Infinity,
            filename: 'angular2.js'
        })
    ],
    output: {
        path: './public/javascript/angular2/',
        filename: '[name]-bundle.js',
        sourceMapFilename: '[name]-bundle.js.map',
        chunkFilename: '[id]-bundle.chunk.js'
    }
};