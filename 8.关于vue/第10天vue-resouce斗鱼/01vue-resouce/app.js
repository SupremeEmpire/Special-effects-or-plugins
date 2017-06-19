
// 加载 express模块
const express = require('express');
// 生成express应用对象
const app = express();
// 引用body-parser 模块
const bodyParser = require('body-parser');

// nodejs内置文件系统模块
const fs = require("fs");

// 使用body-parser 模块 处理通过post请求相关的参数
app.use(bodyParser.urlencoded({ extended: false }));
// 指定一个静态目录
app.use(express.static('www'));

//get请求 
app.get('/getStudents', (req, res) => {
  console.log(req.query);
  let students = [{
    "name": "简政辉",
    "sex": "男",
    "age": 21,
    "phone": 15617816729,
    "email": "jian897826244@qq.com",
    "description": "Catch one’s heart,never be part"
  }, {
    "name": "李莉华",
    "sex": "女",
    "age": 24,
    "phone": 15640901019,
    "email": "2362246688@qq.com",
    "description": "Don't give up"
  }]
  res.status(200).json({ code: "success", message: "获取学生信息成功", data: students })
});
//post请求 
app.post('/postDemo', (req, res) => {
  res.json({ code: "success", message: "添加学生信息成功" })
});
//get请求 
app.get('/jsonp', (req, res) => {
  console.log(req.query.callback);
  //jsonp原理 
  res.jsonp({ code: "success", message: "删除学生信息成功!", })
});

// 监听指定的端口
app.listen(3000, () => {
  console.log('服务器开始运行！！')
});

// get("/students")
// put("/students")
// delete("/students")
// delete("/students")
// 让请求方式有意义
// 让地址 回归 原来的意义


// reset full 风格