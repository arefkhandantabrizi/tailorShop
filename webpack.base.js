// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ComperssionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  /* Tell webpack to run babel on every file
     it runs through */
  // mode: "development",
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ["**/*"],
    // }),
    new ComperssionWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              { targets: { browsers: ["last 2 versions"] } },
            ],
          ],
          plugins: ["@babel/plugin-proposal-function-bind"],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff2|woff|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.(ico|png|jpe?g|webp|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
            },
          },
        ],
      },
    ],
  },
};
