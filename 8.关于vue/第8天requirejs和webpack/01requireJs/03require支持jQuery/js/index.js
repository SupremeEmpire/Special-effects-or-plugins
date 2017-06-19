console.log('index.js加载完毕')


// 注意：加载jQuery 模块时  
// 模块名必须是 jquery（带路径也不行）
// 原因：requirejs对 jQuery的特殊支持
// jQuery文件名必须jquery
// 并且 jQuery必须和入口文件放到同一目录
require(["jquery"],function($){

	$(".box").css({
		width:"200px",
		height:"200px",
		backgroundColor:"red"
	})

})









