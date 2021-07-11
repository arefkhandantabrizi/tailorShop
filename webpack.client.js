const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  /* Tell webpack the root file of our
     server application  */
  // mode: "development",
  mode: "production",

  entry: "./src/client/client.js",

  /* Tell webpack where to put the output file
     that is generated */

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  plugins: [new BundleAnalyzerPlugin()],
};

module.exports = merge(baseConfig, config);
