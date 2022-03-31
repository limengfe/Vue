const path = require('path') //node里很有印象

 module.exports = {
  entry:"./src/main.js",//入口
  output:{              //出口
    path: path.resolve(__dirname,'dist'),//熟悉把node中查找文件
    filename:"bundle.js"
  },
}