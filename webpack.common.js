const path = require("path");

module.exports = {
  //   mode: process.env.NODE_ENV || "production",
  //   mode: "development",
  //   devtool: false,
  // mode: "development",
  // devtool: "eval-source-map",
  entry: "./src/index.ts",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "public",
    filename: "boundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
