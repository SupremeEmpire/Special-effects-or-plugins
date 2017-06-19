//一：展示一个随机的字符
var div = document.getElementById("char");
showChar();
//展示一个字符
function showChar(){
    div.innerHTML = getRandomChar2();
}
// 生成一个随机的字母A-Z
function getRandomChar(){
    //1.生成一个0到25之间的随机数
    var ran = Math.floor(Math.random()*26);
    // 2.根据这个随机数获取相应字符
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(ran);
}

function getRandomChar2(){
    // 65-90 -- A-Z
    //1.生成一个65-90之间的随机数
    // 0-25
    var ran = Math.floor(Math.random()*26) + 65;
    // 2.将字符代码转换为相应的字符
    return String.fromCharCode(ran);
}

//二：监听widnow的键盘事件
window.onkeypress = function(event){

    
    // 获取用户键入的字符的字符代码
    var inputCharCode = event.charCode || event.which;
    // 如果用户键入的值不在以下范围，则结束方法（那么既不会就算正确率，也不会进行动画）
    //65 - 90  97-122
    console.log(inputCharCode);
    if (inputCharCode<65 || (inputCharCode>90 && inputCharCode < 97)|| inputCharCode>122){
        console.log("过滤掉")
        return;
    }

    total ++;
    // 将字符代码转换为字符
    var inputChar = String.fromCharCode(inputCharCode);
    // console.log(inputChar.toUpperCase);
    // console.log(div.innerHTML);
    // 将字符转换为大写与显示的字符对比
    if (inputChar.toUpperCase() == div.innerHTML){
        success++;
        // 用户键入正确
        // 展示一个新的字符
        showChar();
        // 给div添加类名，执行动画
        div.className = "animated zoomIn";
        //为了保证本次动画顺利执行，且可以执行下次动画；
        // 当动画结束，将类名清除，以便再次重新添加类名，重新执行动画
        // 延迟1000毫秒清除类名
        setTimeout(clearAnimate,1000);
    }
    else {
        // 用户键入错误
        div.className = "animated shake";
        // 动画的过程中，颜色是不同，样式不同 ->在动画过程中，使用不同的样式(.shake)
        // 添加类名shaking的开始时间和结束时间
        // 开始动画时添加shaking类名  动画结束时删除shaking类名
        div.classList.add("shaking");
        setTimeout(clearAnimate,1000);
    }

    showSuccess();

}

function clearAnimate(){
    div.className = "";
}

//三：计算正确率
// 键入的成功的次数/键入的总次数
var divResult = document.getElementById("result");
var success = 0;
var total = 0;
// 展示正确率
function showSuccess(){
    var result = success*100/total;
    divResult.innerHTML = `正确率为${result.toFixed(2)}%`;
}