/**
 * 构造一个表盘上的点
 */
function Dial(index, size, color) {
    this.index = index;

    this.color = color || "white";

    Control.call(this)


}
Dial.prototype = Object.create(Control.prototype)
Dial.prototype.coutructor = Dial;

// Dial.prototype.show=function(){
//     this.size = this.index%5 == 0 ? Control.r*0.1 : Control.r*0.05  ;
//     var div = document.createElement("div");
//     document.body.appendChild(div);
//     div.style.borderRadius = "50%";
//     div.style.width = this.size + "px";
//     div.style.height = this.size + "px";
//     div.style.backgroundColor = this.color;
//     div.style.position = "absolute";
//     console.log("ddddddddddd",Control.width);
//     var cx = Control.cx;
//     var cy = Control.cy;
//     var r = Control.r;
//     圆上的点的坐标
//     var x = cx +r*Math.cos(this.index*6*Math.PI/180);
//     var y = cy+ r*Math.sin(this.index*6*Math.PI/180);
//     div.style.left = ( x - this.size/2 ) + "px";
//     div.style.top  = ( y - this.size/2 ) + "px";
//     this.div = div;
// }
/**
 * A类(子类) 继承B类(父类)
 * 如果A类和B类含有同样的方法和属性
 * 操作:对象.show()
 * 如果这个对象是B类,那么执行的是B类的show方法
 * 如果这个对象是B类,那么执行的是A类的show方法
 */

// 覆盖父类的方法
// Dial.prototype.show=function(){
//     console.log("dial------show")
//     // this.div.style.borderRadius = "50%";
// }

// 想要同时使用子类和父类的show方法
// 方式
Dial.prototype.show = function () {
    // 先执行的show1 然后是show2
    // console.log("dial------show1")
    // 执行父类型的show方法
    // this.Control.prototype.show()
    // 使用this来执行Control的原型对象中show方法
    Control.prototype.show.call(this);
    // console.log("dial------show2")
    this.div.style.borderRadius = "50%";

}


/**
 * 使表盘点重新布局
 */
Dial.prototype.layout = function () {

    this.size = this.index % 5 == 0 ? Control.r * 0.1 : Control.r * 0.05;

    this.div.style.width = this.size + "px";
    this.div.style.height = this.size + "px";

    var cx = Control.cx;
    var cy = Control.cy;
    var r = Control.r;
    // 圆上的点的坐标
    var x = cx + r * Math.cos(this.index * 6 * Math.PI / 180);
    var y = cy + r * Math.sin(this.index * 6 * Math.PI / 180);
    this.div.style.left = (x - this.size / 2) + "px";
    this.div.style.top = (y - this.size / 2) + "px";
}