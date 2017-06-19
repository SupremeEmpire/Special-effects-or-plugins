console.log('index.js加载完毕')

// 注意：
// 我们定义一个模块时，这个并不会执行
// 而是当这个模块被加载时才会被执行
// 定义模块define(模块名,'依赖模块',回调函数)
define("jquery",['jquery-2.0.3'],function(){
	console.log($)
	return $;
})

// 可以验证 上面加载jQuery是 加载到了全局里
setTimeout(function(){
	console.log($)
},1000)


// 注意：加载jQuery 模块时  
// 模块名必须是 jquery（带路径也不行）
require(["jquery"],function($){

	$(".box").css({
		width:"200px",
		height:"200px",
		backgroundColor:"red"
	})

})









