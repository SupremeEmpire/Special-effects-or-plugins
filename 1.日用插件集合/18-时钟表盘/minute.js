function Minute(color) {
    this.color = color || "red";
    Second.call(this,this.color);
}
Minute.prototype = Object.create(Second.prototype);
Minute.prototype.constructor = Minute;

Minute.prototype.calcForShow = function () {
    var date = new Date();
    return {
        zhouqi: 3600,
        jump: 45 * 60 + date.getMinutes() * 60 + date.getSeconds()
    }
}

Minute.prototype.calcForLayout = function () {
    return {
        leftw: Control.r * 0.1,
        rightw: Control.r * 0.8,
        height: Control.r * 0.02

    }
} 