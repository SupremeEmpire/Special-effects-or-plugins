console.log('main.js加载完成')

// 在这里面去加载js
// require([]) 异步加载js(文件加载完成才执行的)
// js文件的地址  后缀可以省略
// 加载的js 直接放到header标签里  加了一个异步async 属性
require(['js1',"js2","js3"],function(){
	// js加载完毕才会执行回调函数
	console.log('这是回调函数中的输出');
	fun1()
})

console.log('main.js结束位置')



