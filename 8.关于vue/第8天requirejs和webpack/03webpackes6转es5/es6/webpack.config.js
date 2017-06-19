module.exports ={
    // 入口
    entry:"./index.js",
    // 输出
    output:{
        path:__dirname + "/output",
        filename:"output.js"
    },
    // 配置服务器
    devServer:{
        inline:true
    },
    // 模块
    module:{
        // 加载器
        loaders:[{
            test:/\.js$/,
            loader:"babel-loader",
            query:{presets:["es2015"]}
        }]
    }
}