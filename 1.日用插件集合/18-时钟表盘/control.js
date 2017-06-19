/**
 * 放置在所有的对象中所共用的内容
 */
// 其他构造函数的父类
function Control() {
    // 此时的this是Dial的对象,先从自身找show方法,没有的话再去父类Control中寻找
    this.show();
    this.layout();
}

Control.prototype.show = function () {
    var div = document.createElement("div");
    document.body.appendChild(div);
    this.div = div;
    div.style.backgroundColor = this.color;
    div.style.position = 'absolute';
}
Control.prototype.layout = function () {

}


// 保存窗口的一些属性
// 中心点X坐标  中心点Y坐标  最大半径
// 静态属性


Control.windowResize = function () {
    Control.width = document.documentElement.clientWidth;
    Control.height = document.documentElement.clientHeight;
    Control.cx = Control.width / 2;
    Control.cy = Control.height / 2;
    Control.r = (Math.min(Control.width, Control.height) / 2) * 0.9
}

Control.windowResize();