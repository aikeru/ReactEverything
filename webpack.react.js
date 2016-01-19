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
        'PeopleList': ['./src/shared/PeopleList.jsx']
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.jsx', '.json']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel',
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
        new webpack.optimize.DedupePlugin()
    ],
    output: {
        path: './public/javascript/',
        filename: 'PeopleList.js',
        sourceMapFilename: 'PeopleList.js.map',
        chunkFilename: 'PeopleList.[id].chunk.js',
        libraryTarget: 'umd',
        library: 'PeopleList'
    }
};