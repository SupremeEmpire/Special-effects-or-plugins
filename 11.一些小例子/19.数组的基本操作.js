/**
 * 数组创建方式
 */
//构造函数创建数组
var list = new Array(1,2,3);
console.log(list);
//普通的函数创建数组
list = Array(2,"3",true);
console.log(list);
//字面量的方式(数组放置了一个数组)
list2 = [2,3["1","3"]];
console.log(list2);

//数组中可以放任意类型的数据的
/**
 * 数组操作
 */
//获取数组的长度
list = ["11","222","333"];
console.log(list.length);

//根据下标获取数组元素
console.log(list[0]);
console.log(list[list.length-1]);
//获取元素所在数组的下标位置
 console.log("indexOf:",list.indexOf("11"));

 // 修改数组元素
 list[0] = 111;
 list[1] = 333;
 console.log(list);

 /**
  * 数组的遍历
  */
  // 下标范围 
  for (var i = 0; i < list.length; i++) {
      
      var a = list[i];
       console.log(a);
  }
  // for-in遍历数组
  // for (声明索引变量 in 容器){

  //}
  var count = 0;
  for (var index in list){
      count ++ ;
      //index 就表示容器中元素的下标
      console.log(index);
      console.log(list[index]);
  }
  console.log("count----",count);

//使用forEach方法借助你命函数实现遍历

//匿名函数中参数是匿名函数被调用时指定的
//匿名函数的调用必然是发生在forEach这个函数中的,所以这些参数值是由
//forEach
//所以也只是在forEach可以这样添加参数
list.forEach(function (item,index,array) {
    // item 表示数组中的每个元素
    // index 表示数组元素的下标
    // array 表示被遍历的数组
    console.log(item,index,array);
})
// 这里的匿名函数
// callback 回调函数
//函数是自己实现的,而调用是别人执行的,通过参数传递给别人的


list.forEach(function (aa,bb,cc) {
    console.log(aa,bb,cc);
})
list.forEach(function (aa) {
    console.log(aa);
})
list.forEach(function (bb,ww) {
    console.log(ww);
})
/**
 * 数组的增删
 */
// push()向末尾添加一个元素
list.push("new")
console.log(list);
// pop()讲末尾的元素移除
list.pop();
console.log(list);

// unshift()在数组头部加入一个元素
list.unshift("4444");
console.log(list);
// shift()移除数组中的第一个元素
list.shift();
console.log(list);

// splice (start.deleteCount,addItem1,addItem2,....)
// 从第start这个位置开始操作数组
// 删除deleteCount个
// 再加入addItem1,addItem2等新元素

// slice (start,end)
// 复制数组元素
// 提取数组元素  从start索引开始到end索引结束
// 包含start 不包含end


