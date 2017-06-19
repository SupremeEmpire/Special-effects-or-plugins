
// yin 模块名
// ./m1 模块名
define("yin",['./m1',"m2"],function(sum,shuffle){
	// 导出一个函数库
	return {
		sum,
		shuffle
	}
})

// 引入模块名
require(['yin'],function(obj){
	console.log(obj.sum(1,2,3))
	console.log(obj.shuffle([1,2,3,4,5,6]))
})