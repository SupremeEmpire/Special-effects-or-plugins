
//            字符串替换
// to be or not be , that is a question
// that
// this
// to be or not be , this is a question


/**
 * 封装一个方法,实现字符串的替换问题
 * 参数old:表示要被替换掉原始字符串
 * 参数sub:原始字符串中要被替换的子串
 * 参数newstr:新的字符串(要进行替换其他字符串的新字符串)
 * 返回值:字符串 替换后的新字符串
 */

function myReplace(old,substr,newstr){
    // 表示要被替换的字符串的位置
    var index1 = old.idnexof("that");
    console.log(index1);
    // 要被替换的子串的之前的内容
    var sub1 = old.substring(0,index1);
    console.log(sub1);
    // 要被替换的子串的之后的内容
    var sub2 = old.substring(index1+substr.length);
    console.log(sub2);
    // 组合一个新的字符串并返回
    return sub1 + newstr + sub2;
}

var old = "to be or not be,that is a question"
var substr = "that";
var newstr = "this";
myReplace(old,substr,newstr);
/**
 * 遍历(一遍一遍  历:过程 经理)
 * 数组的遍历:当需要获取到数组中每个元素.并对每个元素执行一个操作时 --->数组的遍历
 *  for(var i = 0;i<array.length; i ++){}
 *  for(var index in array){}
 * array.forEach()
 * 迭代方法 filter.map find findIndex reduce()
 * 一个函数,来完成某种功能,这种行为就叫封装()
 * 封装(制作)一个工具(函数,方法) 写一个函数
 * 封装的主要目的:多次利用
 * 
 */

function mtReplace2(old,substr,newstr){
    for(var i = 0;i< old.length;i ++){
        var getstr = old.substr (i,substr.length);
        console.log(getStr)
        if (getStr === substr) {
            // 如果相等,那么old当中是包含substr这个字符串的
            // 而且他在old当中的位置为i
            // 中断 当前循环(结束的只是当前的循环,他所在的直接的循环)
            // break
            return old.substring(0,i) + old.substring(i+substr.length);

        }
    }
    
}
var result = myReplace2(old,substr,newstr);
console.log(result);


// 练习:2.单词统计
// to be or not be, that is a question
// 统计句子当中的出现哪些单词,和每个单词出现的次数,并得出结果
function tongJi(str){
    var array = str.split(" ");
    console.log(array);
    var obj = {};
    array.forEach(function(item) {
        if (obj[item]) {
            // 获取obj中item变量所保存的key对应的valus
            // 如果为真,说明得到结果,已经存在
            obj[item] ++;
        } else {
            // 为假
            // 说明对象中原本不含有这个key所对应的内容
            obj[item] = 1;
        }
    }, this);
    return obj;
}
var test = "to be or not be , that is a question";
var result = tongJi(test) ;
console.log(result);
