
// 定义一个模块
// 使用自已定义过的模块
define(["m2.js"],function({sum}){
	function average(...params){
		return sum(...params) / params.length;
	}
	// 导出模块
	return average;
})