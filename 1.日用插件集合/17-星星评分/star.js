var data = [
    {
        title:"不满意",
        content:"不满意 实物与图片描述不符,物流速度极慢"
    },
    {
        title:"基本满意",
        content:"基本满意 一般一般一般一般一般一般一般一般一般一般"
    },
    {
        title:"满意",
        content:"满意 还行还行还行还行还行还行还行"
    },
    {
        title:"非常满意",
        content:"非常满意 有质量有速度有质量有速度有质量有速度有质量有速度有质量有速度"
    },
    {
        title:"满意极了",
        content:"满意极了 物美价廉物美价廉物美价廉物美价廉物美价廉物美价廉"
    }

]
// this 指向  调用当前方法的对象 (方法的执行者,调用者)
function Star(count,size){
    // 默认count为5  count为长度,总数
    this.count = count || 5;
    this.size = size || 30;
    this.show();

}
Star.prototype.show = function(){
    console.log("show里面的this是------",this)
    let bg = document.createElement("div");
    document.body.appendChild(bg);
    this.bg = bg;

    for(let i = 0;i < this.count;i ++){
        var img = document.createElement("img");
        bg.appendChild(img);
        img.src = "img/star-yellow.png";
        img.style.width = this.size + "px";
        // 设置img的自定义行内属性
        img.dataset.index = i;

        // 添加鼠标移入事件
        // img.onmouseover = this.mouseover;
        img.onmouseover = this.mouseover.bind(this);
        // 添加鼠标移出事件
        img.onmouseout = this.mouseout.bind(this);
        // 添加鼠标点击事件
        img.onclick = this.click.bind(this);
        // 调整行内块img与评分的对齐程度
        img.style.verticalAlign = "middle";
    }
    // 展示评分
    this.pingfen = document.createElement("span");
    this.bg.appendChild(this.pingfen);
    // 调整行内块img与评分的对齐程度
    this.pingfen.style.verticalAlign = "middle";
}

// 星星的鼠标点击事件
Star.prototype.click = function (event){
    console.log("click里面的this是------",this)
    // this 星星对象
    // event.target 表示被点击的img标签
    // 获取被点击的img的序号
    var index = event.target.dataset.index;
    // 更新展示的评分内容
    this.pingfen.innerHTML = (Number(index)+1) + "分";

    this.clikedIndex = index;
}

/**
 * 星星的鼠标移入事件
 */
Star.prototype.mouseover = function(event){
    console.log("mouseover里面的this是------",this)
    console.log("2-星星对象",this,"触发的事件img标签--",event.target);
    // 获取当前对象中所有的img标签
    var stars = this.bg.querySelectorAll("img");
    // 使被触发的星星之前所有的星星图片改变
    // 得到被触发的星星是第几个
    var index = event.target.dataset.index; 

    for(let i =0;i < this.count;i ++){
        if (i <= index){
            stars[i].src = "img/star-red.png";
        }
        else {
            stars[i].src = "img/star-yellow.png";
        }
    }
    
    this.showDetail(index); 
}
/**
 * 星星的鼠标移出事件
 */
Star.prototype.mouseout = function(event){
    console.log("mouseout里面的this是------",this)
    var stars = this.bg.querySelectorAll("img");
    var index = event.target.dataset.index; 

    // this.clikedIndex 
    //  undefined -> 全部为黄色
    // 0-4 -> 
    for(let i =0;i < this.count;i ++){
        if (i <= this.clikedIndex){
            stars[i].src = "img/star-red.png"
        }
        else {
            stars[i].src = "img/star-yellow.png"; 
        }    
    }

    this.hidenDetail();
}
/**
 * 根据提供的索引，展示评分的详细信息
 */
Star.prototype.showDetail = function(index){
    console.log("showDetail里面的this是------",this)
    // 判断要展示内容的标签是否被创建，
    // 如果没有创建，则创建，如果创建过，则更新数据
    if (this.detail == undefined){
        // 创建
        let detail = document.createElement("section");
        this.bg.appendChild(detail);
        this.detail = detail;
        this.detail.style.width = "200px";
        

        let h2 = document.createElement("h4");
        this.detail.appendChild(h2);
        h2.style.color = "red";
        h2.style.margin = "5px 0";

        let p= document.createElement("p");
        this.detail.appendChild(p);
        p.style.margin = "5px 0";
    }
    // 更新数据
    this.detail.style.display = "block";
    this.detail.style.paddingLeft = (this.size+3)*index  + "px"; 

    var h2 = this.detail.children[0]
    h2.innerHTML = `${Number(index)+1}分 | ${data[index].title}`

    var p = this.detail.children[1];
    p.innerHTML =  data[index].content;
    

     
     
}
/**
 * 隐藏评分信息
 */
Star.prototype.hidenDetail = function(){
    console.log(" hidenDetail里面的this是------",this)
    this.detail.style.display = "none";
}
