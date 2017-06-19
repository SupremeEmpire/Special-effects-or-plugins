
function Dot(color) {
    this.color = color || "black";
    Control.call(this)
}
Dot.prototype = Object.create(Control.prototype)
Dot.prototype.coutructor = Dot;

Dot.prototype.show = function () {
    Control.prototype.show.call(this);
    this.div.style.borderRadius = "50%";


}
Dot.prototype.layout = function () {
    var size = Control.r * 0.08;
    this.div.style.width = size + "px";
    this.div.style.height = this.div.style.width;
    this.div.style.left = (Control.cx - size / 2) + "px";
    this.div.style.top = (Control.cy - size / 2) + "px";
}
