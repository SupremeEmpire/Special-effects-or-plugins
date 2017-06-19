
function Second(color) {
    this.color = color || "black";
    Control.call(this);
}
Second.prototype = Object.create(Control.prototype);
Second.prototype.constructor = Second;

Second.prototype.calcForShow = function () {
    return {
        zhouqi: 60,
        jump: 45 + new Date().getSeconds()
    }
}

Second.prototype.show = function () {
    Control.prototype.show.call(this);

    var data = this.calcForShow();

    this.div.style.animation = `rotate ${data.zhouqi}s infinite steps(60,start)`

    /**
     * delay  延迟
     * 为正值时,动画延迟n秒执行
     * 为负值时,动画跳过n秒进入动画
     */
    // this.div.style.animationDelay = "-30s";
    // 加上second之后,改变分针由n分到n+1分的移动由跳动变为慢慢移动
    this.div.style.animationDelay = `-${data.jump}s`;
}
Second.prototype.calcForLayout = function () {
    return {
        leftw: Control.r * 0.2,
        rightw: Control.r * 0.95,
        height: Control.r * 0.02
    }
}


Second.prototype.layout = function () {
    var data = this.calcForLayout();
    var leftw = data.leftw;
    var rightw = data.rightw;
    var height = data.height;

    this.div.style.width = (leftw + rightw) + "px";
    this.div.style.height = height + "px";

    this.div.style.borderRadius = height / 2 + "px";

    this.div.style.left = (Control.cx - leftw) + "px";
    this.div.style.top = (Control.cy - height / 2) + "px";

    this.div.style.transformOrigin = `${leftw}px center`;
} 