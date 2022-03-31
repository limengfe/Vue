// 1.使用commonJS的模块化规范
const { add,mul} = require('./js/mathFn')

console.log(add(10,20));
console.log(mul(10,10));

// 2.使用ES6的模块化规范
import { name ,age ,height} from "./js/info";

console.log('男神'+ name+'年龄'+age+'身高'+height);