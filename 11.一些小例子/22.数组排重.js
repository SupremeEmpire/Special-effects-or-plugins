/**
 * 外排重
 */
function paiChong(array) {
    // 新建了一个空数组,来存放array中的元素
    var result = [];
    // 遍历数组,拿到数组中的每个元素
    array.forEach(function(item) {
        // 判定result数组中是否含有当前元素
        // 如果含有则,不加入
        // 如果不含有,将元素加入result数组当中
        if (!result.includes.item) {
            result.push(item);
        }
    }, this);
    return result;
}

function paiChong2(item) {
    var result  = [] ;
    array.forEach(function(item) {
        console.log("item----",item,result);
        // item array中每个元素
        // 判定item是否存在于result数组当中
        var index = result.findIndex(function (ele) {
            // ele result当中每个元素
            console.log("ele----",ele);
            return ele  === item;
        })
        console.log("index----",index);
        // 如果index 为-1,说明在result当中并没有找到跟当前item一致的元素
        // 说明不包含
        if (index === -1) {
            result.push(item);
        }
    }, this);
    return result;
}

var list = [1,2,34,345,32,465,213,12,4];
console.log(paiChong2(list));


var test = [1,2,3,5,2];
var index = test.findIndex(function (item) {
    console.log(item);
    return item === 4;
    //一旦返回值true 那么findindex就立马结束
    // 并返回当前元素的索引号
    // 如果 一直没有返回true,那么findIndex方法结束
    // 返回 -1
})
console.log("index----",index);


/**
 * 内排重
 * 原理:从第二个器,跟前面的所有的元素进行对比
 * 如果有相等的,那么就把当前中国元素给删除掉
 */
function paiChong3(array) {
    // 遍历从2个元素起的每个元素
    for (var i = 1; i < array.length; i++) {
      // 拿当前遍历的元素跟他之前的所有的元素进行对比
      for (var j = 0; j <i; j++) {
          //如果相等,说明有重复的
          if (array[i] === array[j]) {
              // 那么就移除掉第i个元素
              array.splice(i,1);
              // 删除一个元素后,被删除的元素的下一个元素就占据了他的位置
              // 而索引要继续增加,那么下次遍历时,下一个元素就被跳过
              // 为了防止++ 就用--抵消
              i--;
              // 对比的元素已经被删除,那么就没有必要继续进行对比,所以中断循环
              // 中断当前循环(内部的小循环)
              break;
          }
      }
        
    }return array;
}

console.log(paiChong3(list));