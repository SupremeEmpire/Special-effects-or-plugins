// 外部 都是全局的
var a = "123";
// requirejs通过define来定义一个模块的
define(function() {
  // 在这里面东西外面都访问不到
  var students = [{
    "name": "赵高恒",
    "sex": "男",
    "age": "500",
    "phone": "12345678900",
    "email": "98765432100@qq.com",
    "description": "地球是圆的"
  }, {
    "name": "蒋永浩",
    "age": 23,
    "sex": "男",
    "phone": 15713690689,
    "email": "815654048@qq.com",
    "description": "啦啦啦德玛西亚"
  }, {
    "name": "罗虎",
    "age": 21,
    "sex": "男",
    "phone": 17688866511,
    "email": "873248674@qq.com",
    "description": "富土康二号流水线质检员"
  }]

  // 导出一个模块
  // 第1种
  // 导出内容不限，可以是基本类型，也可以是对象，数组，方法
  return students;
})
