console.log('main.js加载');
// css.js插件
// 使用方法：插件位置!样式的位置
// 最终加到head标签中了
// require(["./css!style"])

// text.js插件
// 使用方法：插件位置!文本文件的位置（文缀的后缀不能省略）
// 能过ajax方法读取的
require(["./text!./students.js","text!style.css"],
	function(students,style){
	// 读取的结果  都是 文本
	// console.log(JSON.parse(students)[0])
	console.log(style)
	var s = document.createElement('style')
	s.innerHTML = style;
	document.head.appendChild(s)
})

