// 全局变量
function method(){
    console.log(test);
}
//在函数外部声明的变量.叫做全局变量,声明之后,页面的任何地方都可以使用

var test = 100;
method();



// 作用域:使用范围

// 局部变量
function method2() {
    //funciton作用域
    //定义:在方法内声明的变量叫局部变量
    //特征:作用域就在他所声明的函数内,出了函数外是不能使用的
    var a = 23;
}

if (true) {
    var a =100;
}
console.log(a);