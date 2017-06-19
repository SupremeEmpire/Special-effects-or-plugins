// 配置
require.config({
  // baseUrl:'./js/' 
  // 基本的url的地址
  paths: {
  	// 为模块名指定路径  jquery名字必须jquery
    jquery: "./js/jquery.3.2",
    m2:"./js/m"
  },
  shim:{
  	// 定义模块间的依赖关系
  	m2:["jquery"]
  },
  // bundles 模块束
  // 如果一个js文件有多个模块(带有名字)
  bundles:{
  	'./js/m8':['js1',"js2"]
  },
  // 每次在url加一个内容
  // 防止缓存 
  // 数据需要实时更新
  // 开发使用  上线关闭
  urlArgs:"v=" + new Date().getTime(),
  // 设置等待时间  默认为7s 单位s
  // 超时加载失败
  waitSeconds: 6

})

// 配置可以帮我们解决：
// 1. jQuery路径问题 jQuery文件名问题
// 2. 模块之间依赖关系
require(["jquery","m2"],function($,m){
	console.log(m)
	$(".box").css({
		width:"200px",
		height:"200px",
		backgroundColor:"red"
	})

})

// 注意：无法引入定义有名字的模块
require(["js/m8"],function(m){
	console.log(m)
})

// 使用模块束 里的模块
require(["js1","js2"],function(m1,m2){
	console.log(m1)
	console.log(m2)
})