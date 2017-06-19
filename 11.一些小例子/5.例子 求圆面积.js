/**
 * function 函数名(参数1 参数2 参数3){
 * 代码块,  方法体
 * }
 * 练习:给定圆的半径,求圆的面积
 * 封装一个函数, 目的:实现某个功能以便多次使用
 * 什么时候需要加参数;
 * 在实现功能时(代码块)需要哪些因素才能得到结果
 * 这些因素就可以通过参数的方式,在调用方法时传入
 */
function qiuMianji(r){
    var mianji = Math.PI*r*r;
    console.log(mianji);
}
qiuMianji(2);
qiuMianji(8);
qiuMianji(10);


//有返回的方法 有参数的方法
function qiuMianJi(r){
    //在方法体内生命的变量,不能拿到方法体外使用
    var mianji = Math.PI*r*r;
    console.log('方法体内',mianji);
    //return 当方法体内的变量的值,想要拿到方法体外部使用
    //就是可以使用return将值返回
    return mianji;
}
var mianji1= qiuMianJi(2);
console.log('返回的结果:',mianji1);
var mianji2 = qiuMianji(8);
var sum =mianji1 +mianji2;
console.log(sum);
console.log(mianji1+mianji2);
console.log(qiuMianji(10)+qiuMianji(20));