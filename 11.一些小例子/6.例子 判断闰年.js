//练习:判断某个年份是否为闰年
//闰年的定义:
//1.能被4整除,但是不能被100整除,是闰年
//2.能被400整除  是闰年

/**
 * function isRun(year)
 */
 function isRun(year){
     if (year %400 == 0 || (year%4 ==0 && year%100 !=0)) {
         console.log(year,"是闰年");

     }
     else{
         console.log(year,"不是闰年");
     }
 }

  function isRun2(year){
    if (year%4 == 0 && year%100!=0) {
        console.log("闰年");
        //返回 表示方法的结束,在方法体内,一旦执行到return,那么return之后的所有的方法体内的
        //代码都不会被执行
        return;
        console.log("0000000000000");
    }
    if (year%400 ==0) {
        console.log("闰年")
        return;
    }
    console.log("不是闰年");

  }
  //有参的方法,调用时,需要传入参数
  isRun2(2000);
  isRun2(1995);
  isRun2(2008);

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