const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        onboarding: "onboarding@http://localhost:3001/remoteEntry.js",
        compliance: "compliance@http://localhost:3002/remoteEntry.js",
        remittance: "remittance@http://localhost:3003/remoteEntry.js",
        payment: "payment@http://localhost:3004/remoteEntry.js",
        tracking: "tracking@http://localhost:3005/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
