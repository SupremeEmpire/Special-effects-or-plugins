function sum(){
    var params= Array.from(arguments);
    return params.reduce(function(pre,cur){
        return pre+cur;
    })
}
// 导出 是一个对象
exports.sum=sum;
exports.author="尹学江"