import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
 mode: "development",
 entry: "./src/index.js",
 output: {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "dist"),
 },
 devtool: "source-map",
 devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000,
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, "./src/index.html"),
  }),
 ],
 module: {
  rules: [
   {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
   },
  ],
 },
 optimization: {
  runtimeChunk: "single",
 },
}
