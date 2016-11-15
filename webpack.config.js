const path              = require('path'),
      merge             = require('webpack-merge'),
      webpack           = require('webpack'),
      CleanPlugin       = require('clean-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      Visualizer        = require('webpack-visualizer-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event,
      PATHS  = {
        themes: path.join(__dirname, 'themes'),
        admin : {
          app  : path.join(__dirname, 'admin'),
          theme: path.join(__dirname, 'themes/admin/main.scss')
        },
        client: {
          app  : path.join(__dirname, 'client'),
          theme: path.join(__dirname, 'themes/client/main.scss')
        },
        build : path.join(__dirname, 'public')
      },
      ENV    = {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 8080
      };

process.env.BABEL_ENV = TARGET;

const common = {
  entry  : {
    client      : [PATHS.client.app],
    admin       : [PATHS.admin.app],
    vendor      : Object.keys(pkg.dependencies).filter((v) => v !== 'alt-utils'),
    admin_theme : [PATHS.admin.theme],
    client_theme: [PATHS.client.theme]
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
        include: [PATHS.admin.app, PATHS.client.app]
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  module.exports = merge(common, {
    module : {
      loaders: [
        {
          test   : /\.scss$/,
          loader : ExtractTextPlugin.extract('style', 'css!sass'),
          include: PATHS.themes
        }
      ]
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      new ExtractTextPlugin('[name].css'),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({'process.env.NODE_ENV': `"production"`}),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
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
} else {
  module.exports = merge(common, {
    devtool: "source-map", // or "inline-source-map"
    module : {
      loaders: [
        {
          test   : /\.scss$/,
          loader : ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
          include: PATHS.themes
        }
      ]
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      new ExtractTextPlugin('[name].css'),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({'process.env.NODE_ENV': `"development"`}),
      new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']})
    ]
  });
}
// if (TARGET === 'build' || TARGET === 'stats') {
//   module.exports = merge(common, {
//     entry  : {
//       // Exclude alt-utils as it won't work with this setup
//       // due to the way the package has been designed
//       // (no package.json main).
//       vendor: Object.keys(pkg.dependencies).filter((v) => v !== 'alt-utils'),
//       style : PATHS.style
//     },
//     output : {
//       path         : PATHS.build,
//       filename     : '[name].[chunkhash].js',
//       chunkFilename: '[chunkhash].js'
//     },
//     module : {
//       loaders: [
//         // Extract CSS during build
//         {
//           test   : /\.scss$/,
//           loader : ExtractTextPlugin.extract('style', 'css!sass'),
//           include: `${PATHS.app}/styles`
//         }
//       ]
//     },
//     plugins: [
//       new CleanPlugin([PATHS.build]),
//       // Output extracted CSS to a file
//       new ExtractTextPlugin('styles.[chunkhash].css'),
//       // Extract vendor and manifest files
//       new webpack.optimize.CommonsChunkPlugin({
//         names: ['vendor', 'manifest']
//       }),
//       // Setting DefinePlugin affects React library size!
//       new webpack.DefinePlugin({
//         'process.env.NODE_ENV': '"production"'
//       }),
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           warnings: false
//         }
//       }),
//       new Visualizer({
//         filename: '../statistics.html'
//       })
//     ]
//   });
// }
