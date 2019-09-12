const fs = require('fs')
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { replaceWebpackPlugin } = require('@rescripts/utilities')

module.exports = (config, argv) => {
  let entryPoints = {
    VideoComponent: {
      path: "./src/VideoComponent.js",
      outputHtml: "video_component.html",
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
      build: true
    },
    Mobile: {
      path: "./src/Mobile.js",
      outputHtml: "mobile.html",
      build: true
    }
  }

  let entry = {}

  let output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  }

  // edit webpack plugins here!
  let plugins = []

  for (name in entryPoints) {
    if (entryPoints[name].build) {
      entry[name] = entryPoints[name].path
      // output.filename = '[name].bundle.js'
      if (argv && argv.mode === 'production') {
        plugins.push(new HtmlWebpackPlugin({
          // inject: true,
          chunks: [name],
          template: './template.html',
          filename: entryPoints[name].outputHtml
        }))
        console.log('plugins inside loop', plugins)
      }
    }    
  }

  // console.log('config before assignment', config)
  console.log('entry', entry)
  console.log('output', output)
  config = {
    //entry points for webpack- remove if not used/needed
    ...config,
    entry,
    output,
    optimization: {
      minimize: false // neccessary to pass Twitch's review process
    },
  }

  console.log('config after assignment', config)

  return config
}