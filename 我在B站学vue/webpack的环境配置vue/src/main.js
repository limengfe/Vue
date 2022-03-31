// 1.使用commonJS的模块化规范
const { add,mul} = require('./js/mathFn')

console.log(add(10,20));
console.log(mul(10,10));

// 2.使用ES6的模块化规范
import { name ,age ,height} from "./js/info";

console.log('男神'+ name+'年龄'+age+'身高'+height);

// 3.依赖css文件
require('./css/normal.css');
// 打包样式需要较新的局部webpack版本来支持 css-loader和style-loader
// 打包图片使用label，新版本的webpack不需要安装也可以运行 

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊!</h2>')
// npm install --save-dev less-loader less

// 5.使用vue进行开发
import Vue from 'vue';
//需要配置文件，因为运行模式默认-runtime-only

// 也可以把需要加载的代码写成一个组件,单独提出来,再分离一个到另个网页引入进来。app.js
import App from './vue/app';

// 但是可以直接使用vue的模块化开发 App.vue文件
// 此时需要安装2个文件vue-loader,vue-template-compiler支持vue组件使用
// import App from './vue/App.vue';
new Vue({
  el: "#app",
  // 因为index.html不可以普遍修改，所以此处代替index运行加载vue代码。
  template:'<App/>' ,
  components:{
    App
  }
})
  