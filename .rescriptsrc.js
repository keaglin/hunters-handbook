const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = config => {
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
      if (config.mode === 'production') {
        plugins.push(new HtmlWebpackPlugin({
          inject: true,
          chunks: [name],
          template: './template.html',
          filename: entryPoints[name].outputHtml
        }))
        console.log('plugins inside loop', plugins)
      }
    }    
  }

  if (config.mode === 'development') {
    config.devServer = {
      contentBase: path.join(__dirname,'public')
    }
  }

  // console.log('config before assignment', config)
  // console.log('entry', entry)
  // console.log('output', output)
  config = {
    //entry points for webpack- remove if not used/needed
    ...config,
    entry,
    output,
    // plugins,
    optimization: {
      minimize: false // neccessary to pass Twitch's review process
    },
  }


  console.log('config after assignment', config)

  return config
}