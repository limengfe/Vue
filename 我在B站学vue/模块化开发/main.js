// 关于ES6的三种导出方法
// 第一种 ,直接在声明前导出
export let name="李孟飞";
export let age=18;
export let height = 188;

// 第二种，声明后，一起导出,还可以导出类
function fn(a,b){
  return a+b;
}
class person{
  getName(){
    console.log('我是价格')
  }
  
}
export {fn,person};

// 第三种默认导出,导入时可以修改其名,一个文件只能用一次.
export default function (ok){
 console.log(ok);
}

// 重命名导出
// export { name as newName}
// 导入
//import { newName } from 'some-path/file'
