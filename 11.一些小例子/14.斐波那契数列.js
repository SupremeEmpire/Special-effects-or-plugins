// 斐波那契数列 
//   1 1 2 3 5 8 13 21 34......
// 求 第n位上的数字 n从0开始

function fibonacci(n){
    if (n<0) {
        // 结果-1表示是一种错误

        return -1;
    }
    if (n<=1) {
        return 1;
    }
    //指定加法中第一位
    var a1 =1;
    //指定加法中第一位
    var a2 =1;
    //加法中的相加结果
    var result = a1+a2;
    //循环次数 n-1-1次
    for (var i = 0; i < n-1-1; i++) {
        // 每次相加都让第一个值保存上一次加法中的第二个值
        a1 =a2;
        //让第二值保存上一次加法中的结果值
        a2= result;
        //计算信的结果
        result = a1+a2;
        
    }
    //循环结束result保存的值就是我们的结果值
    return result;

}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));



//斐波那契数列 求第n位上的值

var n = 9;
var shu1 = 1;
var shu2 = 1;
for (var i = 3; i <=n; i++){
    var temp =shu2;
    shu2 = shu1+shu2;
    shu1 = temp ;
}
console.log(shu2);