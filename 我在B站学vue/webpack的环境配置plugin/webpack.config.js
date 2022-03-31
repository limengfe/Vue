const path = require('path') //node里很有印象

 module.exports = {
  // mode: 'development',//将值返回开发模式
  entry:"./src/main.js",//入口
  output:{              //出口
    path: path.resolve(__dirname,'dist'),//熟悉把node中查找文件
    filename:"bundle.js",
    publicPath :'dist/ '
  },
    
  module:{
    rules: [
      // style.css
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
     
     //less
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
  //图片
  {
    test: /\.(png|jpg|gif|jpeg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:8].[ext]',
          
        }
      }
    ]
  },
  //babel
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }
  },
  // vue
   {
    test: /\.vue$/,
    use: ['vue-loader'] 
   },
 
]

  
  },
  resolve: {
    /* 配置别名 */
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': "vue/dist/vue.esm.js",
    },
  },
}
  