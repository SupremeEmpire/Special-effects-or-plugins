module.exports={
    // 配置入口文件
    entry:'./entry.js',
    // 配置输出内容
    output:{
        // 文件路径
        // __dirname 代表当前 文件所在路径
        path:__dirname,
        // 文件名字
        filename:"bundle.js"
    },
    // 配置webpack-dev-server
    // 第一种:ifarame模式 顶部带一个黑条
    // 第二种:inline模块 不带黑条 ture
    devServer:{
        inline:false,
        // 设置服务器代理
        // 目的:突破跨域限制
        // 服务器端不存在跨域限制
        proxy:{

        }

    },
    // 模块部分
    module:{
        // 加载器(可以配置多个)
        loaders:[
            {
                // 匹配 以.css结尾的文件
                test:/\.css$/,
                // 指定加载处理
                loader:"style-loader!css-loader"
            }
        ]
    }
}