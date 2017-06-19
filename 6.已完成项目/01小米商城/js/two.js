/* 购物车 */
// 移入
$(".mi-header-gou").hover(function () {
    $(".mi-header-gwc").css({ display: "block" })
    $(".mi-header-gou").css({
        backgroundColor: "white",
        color: "#ff6700",
    })
    $(".mi-header-gou>a").css({
        color: "#ff6700",
    })
    $(".mi-header-gou>a>span").css({
        color: "#ff6700",
    })
})
// 移出
$(".mi-header-gou").mouseleave(function () {
    $(".mi-header-gwc").css({ display: "none" })
    $(".mi-header-gou").css({
        backgroundColor: "#424242",
    })
    $(".mi-header-gou>a").css({
        color: "#555",
    })
    $(".mi-header-gou>a>span").css({
        color: "#555",
    })
})
// 下拉 移入显示
$(".mi-zhong-nav>a").hover(function () {
    $(".mi-nav-xiala").slideDown().css({
        display: "block",
    })
})
// 移出隐藏
$(".mi-nav-xiala").mouseleave(function () {
    $(".mi-nav-xiala").slideUp()
})

/* 搜索栏下拉 */
// 移入显示
$(".ipt1").click(function () {
    $(".mi-header-search").css({
        display: "block",
    })
})
// 移出隐藏
$(".mi-header-search").mouseleave(function () {
    $(".mi-header-search").css({
        display: "none",
    })
})
$(".search-btn").hover(function () {
    $(".search-btn").css({
        border: "1px solid #ff6700",
        color: "white",
        backgroundColor: "#ff6700"
    })
})
$(".search-btn").mouseleave(function () {
    $(".search-btn").css({
        color: "black",
        backgroundColor: "white",
        border: "none",
        borderLeft: "1px solid #e0e0e0"
    })
})


/* 左右移动*/

var aaa = 0;

var arr = $(".mxdpul li").length
console.log(arr)
var time = setInterval(function () {
    if (aaa == 0) {
        for (let i = 0; i < $('.mxdpul li').length; i++) {
            $(".mxdpul li").eq(i).css({
                left: (i - 5) * 250
            })
        }
        aaa = 1;
    }
    else {
        for (let i = 0; i < $('.mxdpul li').length; i++) {
            $(".mxdpul li").eq(i).css({
                left: i * 250
            })
        }
        aaa = 0
    }
}, 5000)

for (let i = 0; i < $('.mxdpul li').length; i++) {
    $('.mxdpul li').eq(i).css({
        left: i * 250,
    })
}
$('.input input').last().click(function () {
    clearInterval(time);
    for (let i = 0; i < $('.mxdpul li').length; i++) {
        $('.mxdpul li').eq(i).css({
            left: (i - 5) * 250
        })
    }
    aaa = 0
    console.log('第一个aaa', aaa)
    // time()
})
$('.input input').first().click(function () {
    clearInterval(time)
    for (let i = 0; i < $('.mxdpul li').length; i++) {
        $('.mxdpul li').eq(i).css({
            left: 250 * i
        })
    };
    aaa = 1
    console.log('第二个aaa', aaa)
    // time()

})


for (let i = 0; i < $(".contenttwoul li").length; i++) {

    if (i == 7 || i == 8) {
        $(".contenttwoul li").eq(i).hover(function () {
            console.log(i)
            $(".contenttwoul li").eq(i).css({
                top: "-2px",
                boxShadow: "0px 1px 16px lightgray",
            })
        })
        $(".contenttwoul li").eq(i).mouseleave(function () {
            $(".contenttwoul li").eq(i).css({
                top: "0px",
                boxShadow: "none"
            })
        })
    }
    else {
        $(".contenttwoul li").eq(i).hover(function () {
            console.log(i)
            $(".contenttwoul li").eq(i).css({
                top: "-2px",
                boxShadow: "0px 1px 16px lightgray",
            })
            $(".review").eq(i).css({
                top: "-54px",
                display: "block"
            })
        })
        $(".contenttwoul li").eq(i).mouseleave(function () {
            $(".contenttwoul li").eq(i).css({
                top: "0px",
                boxShadow: "none"
            })
            $(".review").eq(i).css({
                top: "20px",
                // display: "none"
            })
        })
    }


}
for (let i = 0; i < $(".contenttwoul .ml").length; i++) {
    $(".ml").eq(i).hover(function () {
        $(".ml").eq(i).css({
            top: "-2px",
            boxShadow: "0px 1px 16px lightgray",
        })
    })
    $(".ml").eq(i).mouseleave(function () {
        $(".ml").eq(i).css({
            top: "0px",
            boxShadow: "none",
        })
    })
}



// $(".contenttwoul li").hover(function(){
// $("this").find(".review").stop().animate({top: "-54px"})
// })
// $(".contenttwoul li").mouseleave(function(){
// $("this").find(".review").stop().animate({top: "0px"})
// })

