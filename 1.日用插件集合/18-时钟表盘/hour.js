function Hour(color) {
    this.color = color || "red";
    Second.call(this, this.color);
}
Hour.prototype = Object.create(Second.prototype);
Hour.prototype.constructor = Hour;

Hour.prototype.calcForShow = function () {
    var date = new Date();
    return {
        zhouqi: 3600 * 12,
        jump: 9 * 60 * 60 + date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds()
    }
}

Hour.prototype.calcForLayout = function () {
    return {
        leftw: Control.r * 0.1,
        rightw: Control.r * 0.6,
        height: Control.r * 0.02

    }
} 