const path              = require('path'),
      merge             = require('webpack-merge'),
      webpack           = require('webpack'),
      CleanPlugin       = require('clean-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      Visualizer        = require('webpack-visualizer-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event,
      PATHS  = {
        build: path.join(__dirname, 'public'),
        style: path.join(__dirname, 'themes')
      },
      ENV    = {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 8080
      };

process.env.BABEL_ENV = TARGET;

const common = {
  entry  : {
    client: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output : {
    path    : PATHS.build,
    filename: '[name].js'
  },
  module : {
    loaders: [
      {
        test   : /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    entry    : {
      style: PATHS.style
    },
    devtool  : "source-map", // or "inline-source-map"
    resolve: {
      extensions: ['.scss']
    },
    devServer: {
      historyApiFallback: true,
      hot               : true,
      inline            : true,
      progress          : true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: ENV.host,
      port: ENV.port
    },
    module   : {
      loaders: [
        // Define development specific CSS setup
        {
          test   : /\.scss$/,
          loaders: ["style", "css?sourceMap", "sass?sourceMap"],
          include: `${PATHS.app}/styles`
        }
      ]
    },
    plugins  : [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build' || TARGET === 'stats') {
  module.exports = merge(common, {
    entry  : {
      vendor: Object.keys(pkg.dependencies).filter(function (v) {
        // Exclude alt-utils as it won't work with this setup
        // due to the way the package has been designed
        // (no package.json main).
        return v !== 'alt-utils';
      }),
      style : PATHS.style
    },
    output : {
      path         : PATHS.build,
      filename     : '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module : {
      loaders: [
        // Extract CSS during build
        {
          test   : /\.scss$/,
          loader : ExtractTextPlugin.extract('style', 'css!sass'),
          include: `${PATHS.app}/styles`
        }
      ]
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      // Output extracted CSS to a file
      new ExtractTextPlugin('styles.[chunkhash].css'),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new Visualizer({
        filename: '../statistics.html'
      })
    ]
  });
}
