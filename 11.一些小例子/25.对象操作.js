//     创建方式

// 通过 new+构造函数来创建对象
var obj = Object({p:12});
console.log(obj);
// 通过一个普通函数来创建对象
obj = Object ({age:12});
// 点语法 设置
obj.name = "xiaomao";
console.log(obj);   


var person = {
    name:"kitty",
    age:23,
    speakEnglish:function(){
        console.log("speak ------",english);
    }
}

var dog = {
    name:"xiaohei"
}
// person对象具有了name属性,age属性 还有了speakEnglish方法
// 获取对象的属性和方法
// 点语法: 通过 对象名.属性名  来访问对象的属性值
// 声明一个变量name 来接受person对象的name属性的值
 var name = person.name
 console.log(name);
 var name2 = dog.name
 console.log("dog---------",name2);

 // 获取方法
 var se = person.speakEnglish;
 cosole.log(se);
 // 执行方法
 se();

 // 获取并调用对象的方法
 person.speakEnglish();

 // 设置对象的属性和方法
 // 添加
 person.fuse = "黄色";
 console.log(person);
 person.run = function(){
     alert("run");
 }
 console.log(person);
 person.run = function(){
     console.log("run22222222")
 }
 // 执行person的run方法
 person.run();
 // 删除
 delete person.name;
 console.log(person);

 // 一旦加()就会执行方法
 // delete person.run()
 // 删除时,不能加()
 delete person.run;
 console.log(person);

 // 获取方式
 // 获取aa 变量所保存的值在person中对应的value值
 // aa是变量.不是字符串,不会被作为key值对待
 var value = person[aa];
 console.log(value);
 // 获取age对应value值 (age字符串为key)
 var value = personp["age"];
 console.log(value);

 // 设置或者获取对象中的value值
 // 两种方式
 var test = person.fuse;
 console.log(test);
 test = person["fuse"];
 console.log(test);

// 设置
person[aa] = 34;
console.log(person);

//------对象中可放置的数据类型
var animal = {
    age:2,
    kind:"猫科",
    child:{
        age:1,
        color:"白色",
        fly:function(){
            alert("fly")
        }
    },
    friends:[
        {
            name:"xiaohong"
        },
        {
            name:"xiaomei"
        },
    ]
}
console.log(animal);

//            对象的遍历
var obj ={
    age:"34",
    name:"jianguo",
    run:function(){
        alert("dddd")
    }
}

for(var key in obj){
    cosnole.log(key);
    // obj中不存在一个名字为key的键值
    console.log(obj[key])
}
var obj = {};
cosole.log(obj);
if ({}) {
    cosole.log("111111111");
}

