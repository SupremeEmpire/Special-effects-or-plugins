console.log('main.js加载成功')

// 1. 导入模块
// 回调函数对应位置的参数
// 会接收
// 前面引入的模块 导出的内容
require(["m1.js","m2","m3"],function(module1,{sum},average){
	// {sum}变量解构赋值写法
	// a是全局 能获取到a
	console.log(a)
	console.log(module1[0])
	console.log(sum(1,2,3,4))
	console.log(average(2,8,1,9))
})