/**
 * 练习
 * 1.判定一个数是否为质数
 * 
 */ 
//质数判定,从2开始,只能被1和自身整除的数
function isPrimeNumber(num) {
    // 小于2的数肯定不是质数
    //直接判定返回false
    if (num<2 ) {
        return false;
    }
    //从2开始,判定num能够被num之前的所有的值整除
    //如果发生一旦有一个数可以整除num
    //那么num就不是质数
    //循环是从2开始到达num的前一个数字
    for (var i = 2; i < num; i++) {
        //一旦有一个数字能够整除num
        //那么num就不是质数
        // 那么就不再继续判定,直接结束返回false
        if (num%i == 0) {
            return false;
        }
    }
    //如果从2起 到num前一个数字,没有一个能整除
    //num,那么num就是一个质数,所以返回true
    return true;
}
if (isPrimeNumber(0)) {
    console.log("不是质数");
}
console.log(isPrimeNumber(2))
console.log(isPrimeNumber(3))
console.log(isPrimeNumber(5))
console.log(isPrimeNumber(254))
console.log(isPrimeNumber(41))







