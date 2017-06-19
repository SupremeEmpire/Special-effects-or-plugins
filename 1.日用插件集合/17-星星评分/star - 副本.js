function Star(count,size){
    // 默认count为5
    this.count = count || 5;
    this.size = size || 30;
    this.show();

}
Star.prototype.show = function(){
    let bg = document.createElement("div");
    document.body.appendChild(bg);
    this.bg = bg;

    for(let i = 0;i < this.count;i ++){
        var img = document.createElement("img");
        bg.appendChild(img);
        img.src = "img/star-yellow.png";
        img.style.width = this.size + "px";
        
        // 添加鼠标移入事件
        // img.onmouseover = this.mouseover;
        img.onmouseover = this.mouseover2.bind({obj:"123"});
        // 添加鼠标移出事件
        img.onmouseout = this.mouseout;
        img.onclick = function(){}
    }
}

/**
 * function.call(obj,para1,para2....)  //相当于“obj.function(para1,para2)”
 * 使用obj这个对象调用function函数，且传入参数para1，para2等
 *
 * function.apply(obj,[para1,para2,...])
 * 同call()方法，区别是传入参数的方式不同 apply()传递的是数组
 * 
 * function.bind(obj) 
 * 改变函数中this的指向 this指向 obj,this的值为obj
 * 当函数被触发时，当中的this表示的值是obj
 * 返回值依然是function函数对象（只是当函数被触发时，this改变了）
 */

Star.prototype.mouseover2 = function(event){
    console.log("2-星星对象",this,"触发的事件img标签--",event.target);
}

Star.prototype.mouseover = function(event){
    // 看起这个方法是对象的方法，但实际上，对象并没有触发他
    // 而是在img的鼠标移入事件中触发的
    // 所以，这个的this表示了被触发的img标签
    // 那么这个方法就是鼠标移入事件所触发的方法，则可以
    // 在此方法中接受参数event
    console.log("mouseover---img:",this,event.target);

    // 从文档中找
    // let stars =document.querySelectorAll("img");
    console.log(stars);
    // this.bg.querySelectorAll("img");
    // 星星对象
}
Star.prototype.mouseout = function(){
    console.log("mouseout---",this);
}
