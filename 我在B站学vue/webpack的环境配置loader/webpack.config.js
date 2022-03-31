const path = require('path') //node里很有印象

 module.exports = {
  mode: 'development',//将值返回开发模式
  entry:"./src/main.js",//入口
  output:{              //出口
    path: path.resolve(__dirname,'dist'),//熟悉把node中查找文件
    filename:"bundle.js",
    
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },

    {
      test: /\.less$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader" // compiles Less to CSS
      }]
  },

]
  }
}
  