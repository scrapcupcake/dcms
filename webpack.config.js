var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var copy_config = [
      {from: root('src/clients/editor/editor.html'), to: root('dist/server/editor.html')},
      {from: root('src/clients/frontend/frontend.html'), to: root('dist/server/frontend.html')},
      {from: root('src/assets'), to: root('dist/server/assets')},
    ];

var commonConfig = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'raw-loader' }
    ],
    preLoaders: [
      // needed to lower the filesize of angular due to inline source-maps
      { test: /\.js$/, loader: 'source-map-loader' }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]

};


var clientConfig = {
  target: 'web',
  entry: root('src/clients/frontend/main.browser'),
  output: {
    path: root('dist/frontend')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  },

};

var editorConfig = {
  target: 'web',
  entry: root('src/clients/editor/main.browser'),
  output: {
    path: root('dist/editor')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }  
}


var serverConfig = {
  target: 'node',
  entry: root('/src/server/server'), // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: false,
    __filename: false,
    process: true,
    Buffer: true
  },
  plugins: [
        new CopyWebpackPlugin(copy_config)
  ]
};



// Default config
var defaultConfig = {
  context: path.resolve(__dirname),
  resolve: {
    root: root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname, "dist"),
    filename: 'index.js'
  }
}


var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Editor
  webpackMerge({}, defaultConfig, commonConfig, editorConfig),
  
  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
]

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}