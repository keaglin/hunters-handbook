const fs = require('fs')
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (_env, argv) => {
  let entryPoints = {
    VideoComponent: {
      path: "./src/VideoComponent.js",
      outputHtml: "video_component.html",
      build: false
    },
    VideoOverlay: {
      path: "./src/VideoOverlay.js",
      outputHtml: "video_overlay.html",
      build: false
    },
    Panel: {
      path: "./src/Panel.js",
      outputHtml: "panel.html",
      build: true
    },
    Config: {
      path: "./src/Config.js",
      outputHtml: "config.html",
      build: true
    },
    LiveConfig: {
      path: "./src/LiveConfig.js",
      outputHtml: "live_config.html",
      build: false
    },
    Mobile: {
      path: "./src/Mobile.js",
      outputHtml: "mobile.html",
      build: true
    }
  }

  let entry = {}

  // edit webpack plugins here!
  let plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ]

  for (let name in entryPoints) {
    if (entryPoints[name].build) {
      entry[name] = entryPoints[name].path
      if (argv && argv.mode === 'production') {
        plugins.push(new HtmlWebpackPlugin({
          inject: true,
          chunks: [name],
          template: './template.html',
          filename: entryPoints[name].outputHtml
        }))
      }
    }    
  }

  let config = {
    //entry points for webpack- remove if not used/needed
    entry,
    optimization: {
      minimize: false // neccessary to pass Twitch's review process
    },
  }

  return config
}