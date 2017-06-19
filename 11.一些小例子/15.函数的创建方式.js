/**
 * 方式1
 */
function double(x) {
    return x*2;
}
// function 对象
console.log(typeof double);
double(2);

/**
 * 方式2
 * 使用function构造函数来构造函数
 */
var double2 = new Function( "x",'return x*2');
console.log(typeof double2);
console.log(double2(2));

/**
 * 方式3
 * 匿名函数,没有名字看不到名字
 */
var test = function(){
    console.log("匿名");
}
//在等号右侧,就是一个匿名函数
//等号左侧,使用了变量来接受这个匿名函数
test();


var test2 = 104;
//把函数作为参数,传入到了函数内部
function test2(m){
    // 调用方法-->test方法
    m();
}
test2(test);