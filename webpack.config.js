const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv");
const express = require("express");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  Dotenv.config();
  const publicUrl = process.env.PUBLIC_URL;
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
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          type: "asset/resource",
          generator: {
            filename: "static/media/[name].[hash][ext]",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash].css",
        chunkFilename: "static/css/[id].[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        favicon: "./public/favicon.ico",
        template: "./public/index.html",
        title: "My App",
        filename: "index.html",
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
        publicPath: process.env.PUBLIC_URL || "/",
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
        publicPath: "./",
        generate: (seed, files) => {
          return files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
        },
      }),

      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        openAnalyzer: false,
      }),
      // Add other plugins as needed
    ],
    output: {
      filename: "static/js/[name].[contenthash].bundle.js",
      chunkFilename: "static/js/[name].[contenthash].bundle.js",
      assetModuleFilename: "static/media/[hash][ext][query]",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: process.env.PUBLIC_URL || "/",
    },

    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, "node_modules/.cache"),
      buildDependencies: {
        config: [__filename],
      },
      version: "1.0.0",
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              // drop_console: true, // remove console logs
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          common: {
            minChunks: 2,
            name: "common",
            chunks: "all",
          },
        },
      },
    },
    ...(isDevelopment && {
      devServer: {
        static: {
          directory: path.resolve(__dirname, "public"),
          publicPath: process.env.PUBLIC_URL || "/",
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
    }),
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
