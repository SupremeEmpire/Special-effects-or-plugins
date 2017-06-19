// 函数方法,function 声明函数,声明函数,并制定函数名
//function 函数名(){
//    方法体
//}
function method(){
    var a=10;
    var b =10;
    var c =a*b;
    console.log(c);
}
//只是声明了的函数是不会被自动执行的,想要让函数被执行,需要调用函数
// 语法 : 函数名();
method();
method();
method();
/**
 * 函数是一段代码,封闭性的代码集合
 * 函数的好处:
 * 1.将重复的代码放入函数内,可以多次使用!
 * 2.将相同功能的代码封装成函数
 *   根据不同的情况多次使用
 */
// 封装一个函数
// 实现一个功能  求两个数的成绩,并输出在控制台.参数a和参数b
// 有参函数
function method2(a,b){
    var c = a*b;
    console.log(c);
}


