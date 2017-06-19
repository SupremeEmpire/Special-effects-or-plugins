/**
 * 求得，在本js文件中所有方法被触发的总次数
 */
// 全局变量 来表示方法被触发的总次数
// 默认值为0
// var count = 0;
function method1(){
    
    count ++;
}
function method2(){
    count ++;
}
var count = 0;
method1()
method2();
method1()
method2();
method1()
method2();
method1()
method2();

console.log("----",count);


/**
 * 
 */

function test(a,b){
    console.log(a,b);
}

test(10,20);
var a = 10 ,b = 20;
test(a,b);

a = 1000;
test(100,200);

// 在函数内部使用外部的值
// 可以通过参数传入（每次调用方法时独有的）
// 也可以使用全局变量（各个方法共有）

/**
 * 
 */
function isRun(){
    console.log(year)
}
var year = 1990;
isRun();

var year2 = 2000;
isRun()