module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
    },
    module: {
      loaders: [
      { test: /\.css$/, loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
      ]
    }
  };
