const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // entry: "./src/index-class.jsx",
  // entry: "./src/index-function.jsx",
  devtool: "eval-source-map", // enable the debugger !
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3721,
  },
};
