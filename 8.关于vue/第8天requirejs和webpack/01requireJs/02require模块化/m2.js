// 定义模块
// 在定义模块时，我们可以引入其它模块
// require 和 exports是 requirejs内置模块
// 注意：使用前面引入的模块，只需在回调函数中 声明一个参数进行接收
define(["require"], function(require) {
  function sum(...params) {
    return params.reduce((pre, cur) => pre + cur)
  }

  // return sum

  // 第二种导出方式
  // exports.sum = sum
  // exports.name = "尹学江"
  // return {
  // 	sum:sum,
  // 	name:"尹学江"
  // }

  // 第三种导出方式
  // 通过require 把exports导入进来
  let exp = require("exports")
  exp.sum = sum;
  exp.name = "尹学江";

})
