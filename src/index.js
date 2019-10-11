import HtmlWebpackPlugin from 'html-webpack-plugin'

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

let rules = [
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

config.module.rules.concat(rules)
 
let entry = {}
let output = []
for (name in entryPoints) {
  if (entryPoints[name].build) {
    entry[name] = entryPoints[name].path
    output.push(new HtmlWebpackPlugin({
      inject: true,
      chunks: name,
      template: './template.html',
      filename: entryPoints[name].outputHtml
    }))
  }     
}