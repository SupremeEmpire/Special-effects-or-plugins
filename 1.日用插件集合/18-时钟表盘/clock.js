var style = document.createElement("style");
document.head.appendChild(style);
style.innerHTML = `
    html,body{height:100%}
    body{margin:0;background-Image: url(0.0.jpg)}
    @keyframes rotate{
        0%{
            transform:rotate(0deg)
        }
        100%{
            transform:rotate(360deg)
        }
    }
    `

/**
 * 构造一个时钟对象
 */
function Clock() {
    // 创建一个表盘
    var array = [];
    for (i = 0; i < 60; i++) {
        var dial = new Dial(i);
        array.push(dial);
    }
    // 创建表盘中心点
    var dot = new Dot();

    // 创建秒针指针
    var second = new Second();
    // 创建分针指针
    var minute = new Minute();
    // 创建时针指针
    var hour = new Hour();
    // 监听窗口的resize事件  resize重新设置大小,当窗口大小发生改变时触发事件
    window.onresize = function () {
        console.log("resize")
        // 更新Control中记录的关于窗口的值
        Control.windowResize();
        array.forEach(function (item) {
            item.layout();
        })
        dot.layout();


        second.layout();

        minute.layout();

        hour.layout();

    }
}