// 1.使用commonJS的模块化规范
const { add,mul} = require('./js/mathFn')

console.log(add(10,20));
console.log(mul(10,10));

// 2.使用ES6的模块化规范
import { name ,age ,height} from "./js/info";

console.log('男神'+ name+'年龄'+age+'身高'+height);

// 3.依赖css文件
require('./css/normal.css');
//  打包图片需要较新的局部webpack版本来支持 css-loader和style-loader 

// 4.依赖less文件
require('./css/special.less');
document.writeln('<h2>你好，我嫩爹！</h2>');
// npm install --save-dev less-loader less