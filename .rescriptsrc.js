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
        // console.log('plugins inside loop', plugins)
      }
    }
  }

  if (config.mode === 'development') {
    config.devServer = {
      contentBase: path.join(__dirname,'public')
    }
  }

  // console.log('loaders', config.loaders)

  
  let rules = [
    // {
    //   test: /\.css$/,
    //   use: [
    //     // style-loader
    //     { loader: 'style-loader' },
    //     // css-loader
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         modules: true
    //       }
    //     },
    //   ]
    // }
    // ,
    // file-loader
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    }
  ]

  rules = config.module.rules.concat(rules)

  let module = {
    rules
  }

  console.log('rules is', rules)
  console.log('config.module.rules is', config.module.rules)
  // console.log('...rules is', ...rules)
  // console.log('{...rules} is', {...rules})
  // console.log('{...config.module.rules, ...rules} is', {...config.module.rules, ...rules})
  // console.log('{...config.module.rules, rules} is', {...config.module.rules, rules})
  // console.log('module is', config.module)
  // let loaders = [
  //   {
  //     test: /\.css$/,
  //     loader: 'style-loader!css-loader!'
  //   },
  //   {
  //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           name: '[name].[ext]',
  //           outputPath: 'fonts/'
  //         }
  //       }
  //     ]
  //   }
  // ]

  // console.log('config.module.rules', config.module.rules)
  // console.log('config.module', config.module)

  config = {
    ...config,
    entry,
    output,
    module,
    optimization: {
      minimize: false // neccessary to pass Twitch's review process
    },
  }

  return config
}