
/**
 * 作业练习：
 * 1.求得数组[23 89 34 0 1 80 100]中的最大值
 * 2.对一系列的数字进行排序 如 12 45 90 23 
 * 3.写方法实现数组排重（将数组中的重复的内容移除掉） 
 * 
 */

// 对一系列的数字进行排序  
var array= [12,45,654,65,95,30,90,23];
var result = array.sort(function (a,b) {
    console.log(a,b);
    return a-b;
})
console.log(result);


// 数组排重
var paiChong = [12,45,,654,654,12,65,95,30,12,90,23];
function name(array) {
    var result = [];
    array.forEach(function(item) {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}
console.log(name(paiChong));

// 求最大值
var shuZu = [23,89, 34, 0, 1, 80, 100];
/**
 * 根据一个数组,求得数组中的最大值
 * @param{*} array 求最大值的数组
 * 返回值:最大值
 */

function getMax(array) {
    // 先假定第一个元素为最大值0
    // 使用变量记录最大值的索引
    var maxIndex = 0 ;
    // 循环从1开始,到数组的末尾
    for(var i=0;i<array.length;i++){
        // 拿最大值跟本次循环值进行对比,如果最大值大,什么不做
        //如果最大值小,那么改变最大值指针为当前循环值
        //更改   
        if (array[maxIndex]<array[i]) {
            //更改最大值
            maxIndex=i;
        }
    }
    // maxIndex始终指向最大值
    return array[maxIndex];
}
console.log(getMax(shuZu));


function mySort(array) {
    // 循环从0开始,到大j-1
    for (var j = array.length; j >0; j--) {
        for(var i = 0; i<=j; i++){
            //当前循环元素跟他的后一位
            //如果当前元素小于他的后一位
            // 那么就交换位置,较大值在后面
            if (array[i]>array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
        
    }
    return array;
}
var list = [1,2,324,231,42,23];
console.log(mySort(list));


function test(array){
    // 循环次数：数组的数组的长度减一
    // length 3
    // j:1 0 
    // length 4  ->j: 2 1 0 
    // length 2 ->j :0
    for (var j = array.length-2; j>=0 ;j --){
        // 外层循环 1.控制循环次数 2.提供内部循环索引最大值
        for(var i = 0;i <= j;i ++){
            if (array[i] > array[i+1]){
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
    }


    // // 0 length-1
    // for(var i = 0;i <= array.length-2;i ++){
    //     if (array[i] > array[i+1]){
    //         var temp = array[i];
    //         array[i] = array[i+1];
    //         array[i+1] = temp;
    //     }
    // }
    // console.log(array);

    // for(var i = 0;i <= array.length-2-1;i ++){
    //     if (array[i] > array[i+1]){
    //         var temp = array[i];
    //         array[i] = array[i+1];
    //         array[i+1] = temp;
    //     }
    // }
    // console.log(array);

    // for(var i = 0;i <= array.length-2-1-1;i ++){
    //     if (array[i] > array[i+1]){
    //         var temp = array[i];
    //         array[i] = array[i+1];
    //         array[i+1] = temp;
    //     }
    // }
    // console.log(array);

    
}
test([10,200,5,90,8,30]);


/**
 * 排序;
 * 拿数组中的每个元素跟后面的所有的元素进行对比
 * 如果小,则交换位置
 */
function mySort2(array) {
    // 循环 0到数组中的倒数第二
    for (var i = 0; i < array.length-1; i++) {
        for (var j = i+1; j < array.length; j++) {
            
            if (array[i]>array[j]) {
                var temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
        
    }
    return array;
}
console.log(mySort2([10,34,45,0,8,3,80,1]));