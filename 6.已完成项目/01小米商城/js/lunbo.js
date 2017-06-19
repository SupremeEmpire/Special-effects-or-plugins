class carousel {
    constructor(params) {
        this.imgNameArr = params.imgNameArr;
        this.width = params.width;
        this.height = params.height;
        this.time = params.time;
        this.$element = params.$element;
        this.interval = null;
    }
    //1. 添加轮播图图片
    addImg() {
        var html = '';
        for (var i = 0; i < this.imgNameArr.length; i++) {
            html += '<img src="' + this.imgNameArr[i] + '">';
        }
        this.$element.html(html);
    }
    // 2. 设置轮播图 img的样式
    asjustImgstyle() {
        this.$element.css({
            position: 'relative',
            width: this.width,
            height: this.height,
            overflow: 'hidden'
        })
        this.$element.children('img').css({
            position: 'absolute',
            top: '0',
            width: this.width,
            height: this.height,
        }).css('left', function (index) {
            // index:当前标签的索引
            return index * this.width;
        })
    }
    //3. 实现图片切换
    changeImg() {
        var that = this;
        this.interval = setInterval(function () {
            that.$element.children('img').css('left', '-=' + that.width);
            // 找到正在显示图片的索引,修改对应的圆点颜色
            // 正在显示的图片:left = 0
            // each() : 遍历jQuery对象中的每一个元素,类似for循环
            that.$element.children('img').each(function () {
                // console.log(this);
                // 找到当前图片的left值
                var left = $(this).position().left;
                if (left == 0) {
                    // 正在显示的图片的索引
                    var index = $(this).index();
                    // console.log(index);
                    that.$element.children('.dot').children('span')
                        .eq(index).css('backgroundColor', 'white')
                        .siblings().css('backgroundColor', 'grey')
                }
            })
            // 边界判断
            var left = that.$element.children('img').eq(0).position().left;
            // console.log(left);
            if (left < (that.width * (that.imgNameArr.length - 1) * (-1))) {
                // 重置图片的位置
                that.resetImgAndDot();
            }
        }, this.time)
    }
    //6. 重置图片.圆点样式为初始状态
    resetImgAndDot() {
        // 重置图片的位置
        this.$element.children('img')
            .css('left', function (index) {
                // index:当前标签的索引
                return index * this.width;
            })
        this.$element.children('.dot').children('span')
            .eq(0).css('backgroundColor', 'white')
            .siblings().css('backgroundColor', 'grey')
    }
    // 4. 添加圆点
    addDot() {
        this.$element.append('<div class="dot"></div>');
        var html = '';
        for (var i = 0; i < this.imgNameArr.length; i++) {
            html += '<span></span>';
        }
        this.$element.children('.dot').html(html);
    }
    

    // 5. 设置原点的样式
    asjustDotstyle() {
        this.$element.children('.dot').children('span').css({
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            border:"2px solid #e0e0e0",
            backgroundColor: 'grey',
            marginLeft: '10px',
        }).eq(0).css('backgroundColor', '#b0b0b0');
        var pWidth = this.$element.width();
        var pHeight = this.$element.height();
        this.$element.children('.dot').css('display', 'inline-block');
        // this.$element.children('.dot').css('display', 'inline-block');
        var sWidth = this.$element.children('.dot').width();
        var sHeight = this.$element.children('.dot').height();
        this.$element.children('.dot').css({
            position: 'absolute',
            top: pHeight - sHeight - 40,
            left: pWidth - sWidth - 40,
        })
    }
    // 7. 鼠标移动到圆点上切换图片
    changeDot() {
        var that = this;
        this.$element.children('.dot').children('span')
            .mouseover(function () {
                // 圆点的样式
                $(this).css('backgroundColor', 'red')
                    .siblings().css('backgroundColor', 'black');
                // 圆点的索引
                var index = $(this).index();
                that.$element.children('img').css('left', function (i) {
                    //i: 图片的索引
                    return (i - index) * that.width;
                });
                // 清除定时器
                clearInterval(that.Interval);
                // 重建一个定时器
                that.changeImg();
            })
        //  0 1 2 3 4 5   i 图片的索引
    }
    //8. 轮播图
    startCarousel() {
        //1. 添加轮播图图片
        this.addImg();
        // 2. 设置轮播图 img的样式
        this.asjustImgstyle();
        //3. 实现图片切换
        this.changeImg();
        // 4. 添加圆点
        this.addDot();
        // 5. 设置原点的样式
        this.asjustDotstyle()
        // 7. 鼠标移动到圆点上切换图片
        this.changeDot()
    }
}
var c = new carousel({
    imgNameArr: [
        'images/xmad_14956999641266_cIvHa.jpg',
        'images/lbo1.jpg',
        'images/lbo2.jpg',
        'images/lbo3.jpg',
        'images/lbo4.jpg',
        'images/lbo5.jpg'
    ],
    width: 1227,
    height: 460,
    time: 2000,
    $element: $('#xxx')
})
c.startCarousel();

// 封装:
// 把实现某个功能的数据和操作封装为一个对象
// 优化代码结构,增强代码的可读性,有利于代码的重用
// var stu = {
//     name: '小明',
//     age: 18,
//     study: function () {
//         console.log('~~~~~');
//     }
// }


