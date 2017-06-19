const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/register/:value',(req,res)=>{
    console.log(req.params.value);
    var value = req.params.value;

    // 把 value 和 数据中的 用户名进行匹配
    // 匹配成功，用户名 存在
    // 匹配不成功，用户名不存在

    // 模拟一个匹配过程
    setTimeout(function(){
        if(value == 'tom'){
            res.json({error:1,message:'用户名已经存在'})
        }else{
            res.json({error:0,message:'用户名可以使用'})
        }
    },2000)

})

app.listen(3000,()=>console.log('running 3000'))