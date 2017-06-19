#### jQuery 插件实现日期（datedropper） 时间（timedropper）选择

１、引入相关js和css文件。注意datedropper和timedropper都是基于jQuery的插件，所以要先引入jQuery库文件。

```
    <script src="jquery.js"></script> 
    <script src="datedropper.js"></script> 
    <link rel="stylesheet" type="text/css" href="datedropper.css">
```

２、布置body中的html。
```
    <input type="text" id="XXXX" />

```
３、调用datedropper和 timeDropper
```
    <script> 
        $("#XXXXX").dateDropper(); 
        $("#XXXXX").timeDropper();         
    </script>
```
然后，就是可以根据需要适当配置一些选项。
datedropper提供了如下基本选项设置： 下载地址：http://felicegattuso.com/projects/datedropper/
    animate：展示动画效果，当设置为true时，选择器面板中的日期会做动画滚动到当前日期，默认是true。
    init_animation：点击弹出面板时的动画效果，有fadeIn(默认), bounce, dropDown三种效果。
    format：格式化日期，我已经将默认的格式改成了Y-m-d。
    lang：语言，我已经将插件默认的月份和星期翻译成中文语言了。
    maxYear：最大年份，默认当前年份。
    minYear：最小年份，默认1970。
    yearsRange：年份范围，默认10年。
    dateDropper还提供了皮肤样式的设置。

timeDropper提供了如下基本选项设置：  下载地址：http://felicegattuso.com/projects/timedropper/
    meridians：是否12小时制，默认是12小时制，设置为false则为24小时制。
    format：格式化，HH:mm如02:12。
    init_animation：动画形式，fadeIn(默认), dropDown。
    setCurrentTime：自动设置当前时间。
    timeDropper也提供了皮肤样式的设置。