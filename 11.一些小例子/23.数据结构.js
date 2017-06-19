/**
 * 数据结构:
 * 线性数据结构
 * 数组 (连续存储)
 * 链表 (离散存储)
 * 队列 (先进先出) First in First out FIFO
 * 栈   (先进后出) First in Last  out FIFO
 */
// 模拟队列
var array = [];
// 入列
array.unshift(1);
array.unshift(2);
array.unshift(3);
// 出列
console.log(array);
array.pop();
console.log(array);
array.pop();
console.log(array);
array.pop();


// 模拟栈
var array = [];
// 入栈
array.push(1);
array.push(2);
array.push(3);

// 出栈
console.log(array);
array.pop();
console.log(array);
array.pop();
console.log(array);
array.pop();

// push 在末尾加 unshift 在头部加

var array = [];
// 获取当前时间的毫秒数
var start = +new Date();
console.log(start);
for(var i = 0;i < 10000;i ++){
    array.push(1);
}

// 获取当前时间的毫秒数 
var end = +new Date();
for(var i =0;i < 10000; i ++){
    array.unshift(1);
}
var end = +new Date();
console.log("unshift---",end-start);