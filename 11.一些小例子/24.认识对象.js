// 数据容器
// object
// js 万事万物都叫对象  
// 对象 实例  物体
// 特征 和行为
// number boolean  string  array
// object
//　一个人的信息
// 名字:王五
// 国际:中国
// 年龄:29
// 性别:男 属性(特征)
// 说话
// 劳动  功能(行为)

// 使用变量描述了一个人的特性 (属性)
var name = "王五";
var guoji = "中国";
var age = 29;
var fuse ="黄色";
var sex = "男";

// 描述一个人的行为( 功能 能力  技能)
var speak = function(){
    alert("speak");
}
var action = function(){
    alert("我可以劳动");
}
// 使用对象来描述一个人的特征
// {}对象字面量  对象 (容器)
var wangwu = {
    // 给要存储的数据起一个名字,这个名字就叫做key
    // 而要存储的数据就叫做valus
    // 对象当中存放的数据形式就是key-value 的形式
    // 一对键值对 KV
    // key可以加"".也可以不加引导
    name: "王五",
    //每队键值对用逗号隔开
    age:15,
    guoji: "中国",
    fuse:"黄色",
    sex:"男",
    speak:function(){
        // this,
        alert(this.name + "会说话");
    },
    action:function(){
        alert("我会劳动");
    }
}
console.log(wangwu);
console.log(wangwu);

/**
 * 一堆数据和对数据进行操作的方法的集合叫对象
 * 使用对象的好处
 * 1.数据和方法封装在一起,便于操作
 * 2.数据和方法之间联系更加紧密
 * 什么情况下使用对象
 * 1.需要存储数据和方法时使用
 * 2.顺序不重要的时候
 */