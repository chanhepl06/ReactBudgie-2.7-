const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv");
const express = require("express");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = (env, argv) => {
  Dotenv.config();

  const environment = argv.mode || "development";
  const isDevelopment = environment === "development";
  const isQA = environment === "qa";
  const isProduction = environment === "production";

  const apiUrl = isDevelopment
    ? process.env.DEV_API_URL
    : isQA
    ? process.env.QA_API_URL
    : process.env.PROD_API_URL;

  const port = isDevelopment
    ? process.env.DEV_PORT
    : isQA
    ? process.env.QA_PORT
    : process.env.PROD_PORT;

  const publicUrl = "/";

  return {
    entry: "./src/index.tsx",
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    mode: environment,
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
            "ts-loader",
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ["file-loader?name=[name].[ext]"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: "./public/favicon.ico",
        manifest: "./public/manifest.json",
        filename: "index.html",
        inject: "body",
        template: "./public/index.html",
        title: isQA
          ? "QA Webpack App"
          : isProduction
          ? "Production Webpack App"
          : "Development Webpack App",
      }),
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify(apiUrl),
        "process.env.PUBLIC_URL": JSON.stringify(publicUrl),
        "process.env.COMMON_VARIABLE": JSON.stringify(
          process.env.COMMON_VARIABLE
        ),
      }),
      new WebpackManifestPlugin({
        fileName: "manifest.json",
        basePath: publicUrl,
        generate: (seed, files, entries) => {
          const manifest = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          return manifest;
        },
      }),
    ],
    output: {
      filename: "static/js/[name].bundle.js",
      chunkFilename: "static/js/[name].bundle.js",
      assetModuleFilename: "static/media/[hash][ext][query]",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: publicUrl,
    },
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, "node_modules/.cache"),
      buildDependencies: {
        config: [__filename],
      },
      version: "1.0.0",
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "public"),
        publicPath: ["/"],
      },
      compress: true,
      port: port,
      open: true,
      hot: true,
      historyApiFallback: true,
      allowedHosts: "all",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
      setupMiddlewares: (middlewares, devServer) => {
        const app = devServer.app;

        app.use(
          "/api",
          express.static(path.resolve(__dirname, "node_modules/.cache"))
        );

        return middlewares;
      },
    },
  };
};
