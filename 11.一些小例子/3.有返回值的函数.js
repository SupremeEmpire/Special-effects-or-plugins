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

//无参无返回值的方法
//test方法没有返回值,不要用变量接受
function test(){
    console.log("ddd")
    return;
}

//无参 有返回值方法
function test2(){
    // 100就是方法的返回值
    return "100";
}
// a保存的值就是方法test2的返回值
var a = test2();
console.log(a);

// 练习:判断闰年
//判断年份是否为闰年
//如果是闰年 则制作一个2月份的日历(29)
//如果不是闰年 则制作一个2月份的日历(28)

function isRUN(year){
    if(year%4 ==0 && year%100!=0){
        console.log('run')
        return true;
    }
    if (year%400 == 0) {
        console.log("run")
        return true;
    }
    console.log("bushi");
    return false;
}
var isrun =isRUN(2000)
if (isrun == true) {
    console.log("制作一个日历 2月为20天")
}else{
    console.log("制作一个日历 2月为28天")
}
