// .............在这里指定时间...................................
var time = 60*100;
// 创建一个div标签 让他先是到body中
var div = document.createElement("div");
document.body.appendChild(div);
div.innerHTML = `距离倒计时结束还有100分钟00秒`;

function count(){
    time--;
    // 计算当前时间的分钟数
    var minute = Math.floor(time/60);
    // 秒数
    var second = time%60;
    div.innerHTML = `距离倒计时结束还有${formate(minute)}分钟${formate(second)}秒`
    if (time > 0){
        setTimeout(count,1000);
    }
    else {
        div.innerHTML = "倒计时结束";
    }
    
}
// 指定时间时候调用 延迟执行
setTimeout(count, 1000);

function formate(time){
     return time>=10 ? time : "0"+time;
}