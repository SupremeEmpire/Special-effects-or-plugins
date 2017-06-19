var list = ["zhongguo","meiguo","hanguo","zhongmei"];
console.log(list.sort());

// var list = [10,4,"abc","a"];
// console.log(list.sort());
//对数字进行排序
var list= [2,10,9,1,0];
//正序
var result = list.sort(function (a,b) {
    console.log(a,b);
    return a-b;
})
console.log('result:',result);
// 反序
result = list.sort(function (a,b) {
    return b-a;
})
console.log(result);

list = ["1","20","4","18"]

var result = list.map(function (item,index,array) {
    console.log(item,index,array);
    return item*2
})
console.log(result);

result = list.map(function (item) {
    if (item>=10) {
        return item;
    }
    else{
        return "0"+item;
    }
})
console.log(result);

//三目运算符
result = list.map(function (item) {
    return item>=10? item:"0"+tiem;

})
console.log(result);


for (var i = 0; i < list.length; i++) {
    if (list[i]<10) {
        list[i] = "0"+list[i];
    }
}
console.log(list);

//累加器
var result = list.reduce(function (lastItem,item,index,array) {
    console.log(lastItem,item,index,array);
    return lastItem + item;
})
console.log(result);