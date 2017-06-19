// document.write("看一下webpack是如何工作的!")

// var contentText= require('./content.js');
// document.write(contentText);

// 看一下加载器的使用

//把css 编译成js  再把样式输入到页面中去
require('!style-loader!css-loader!./style.css');

var contentText= require('./content.js');
document.write(contentText);