// app.module.ts 应用的根模块

//ng2 应用是模块化的,并且ng2有自己的模块系统,叫做 ng2模块
//每一个ng2的应用至少有一个模块(根模块),
//把根模块习惯上命名为 AppModule  

//导入一些相关的ng2模块
//浏览器相关的模块  
import { BrowserModule } from '@angular/platform-browser';
//定义模块的装饰器 
import { NgModule } from '@angular/core';
//表单相关的模块(如果不需要表单处理,可以删除) 
import { FormsModule } from '@angular/forms';
//http: 请求模块(如果不需要网络请求也可以删除) 
import { HttpModule } from '@angular/http';

//导入组件
import { AppComponent } from './app.component';
//导入自定义组件 
import { HomeComponent } from './home/home.component';
//导入自定义管道 
import { BookPipe } from './book/book.pipe';

//@NgModule() 模块装饰器
//ng2的模块(不管是根模块还是我们自己以后创建的模块)都带有
//@NgModule 模块装饰器,用来装饰一个 模块类
//接收一个用来描述模块属性的元数据 对象 
@NgModule({
  //声明当前模块所拥有的视图类:ng2的视图类有三种:组件,指令,管道(过滤器) 
  declarations: [
    AppComponent,
    //使用之前先 声明 
    HomeComponent,
    BookPipe
  ],
  //定义当前模块所依赖的其他模块 ---- 依赖注入 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //定义当前模块所依赖的服务 
  providers: [],
  //指定应用的主视图(我们称为根组件) 
  //只有根模块才能设置 bootstrap 属性 
  bootstrap: [AppComponent]
})

//导出AppModule 模块类
//根模块不需要导出任何数据,因为在其他组件不需要导入根模块  
export class AppModule { }
