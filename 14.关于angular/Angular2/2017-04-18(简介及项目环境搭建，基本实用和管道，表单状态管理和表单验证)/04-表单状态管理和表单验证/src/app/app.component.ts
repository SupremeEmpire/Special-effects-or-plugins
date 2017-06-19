// Angular 应用是由组件组成的。
// 组件由 HTML 模板和组件类组成，组件类控制视图。

//app.components.ts 根模块的组件 是一个组件类

//组件负责控制页面上的一小块区域,我们称之为视图 

//导入组件内的装饰器 
import { Component } from '@angular/core';


//装饰器:使用来修饰JS 类的函数,ng2 有很多装饰器
//我们使用装饰器把元数据附加到类上
//元数据:是用来告诉ng2 如何处理一个类  

//@Component() 组件类的装饰器
//装饰器接受一个配置对象,ng2会基于这些信息创建和展示组件
//及其视图 
@Component({
  // css 选择器,告诉ng2 在父级html中查找<app-root>标签,
  // 然后创建并插入该组件
  // (也可以理解为组件的名称,在模板中可以通过组件的名称来使用组件)
  selector: 'app-root',
  //组件的html模板的相对路径 
  templateUrl: './app.component.html',
  //也可以使用模版字符串 
  // template:"<h1>你好 ng2!</h1>", 
  //组件视图的css样式文件 
  styleUrls: ['./app.component.css'],
  //也可以通过styles 设置样式
  // styles:[
  //   `h1{
  //     color:#fa6;
  //     font-size:3rem;
  //   }`
  // ]  
})
//导出组件类 AppComponent
//我们在类中定义组件的应用逻辑,为视图提供支持
//类由属性和方法组成,视图上所需要的数据 和 事件交互都写在这里  
export class AppComponent {
  // title = 'app works!';
  public title:string ='app works!';

 p = {name:'tom',age:22,course:'HTML5'};
 course = ['HTML5','UI','大数据'];
 submit(){
   console.log('表单验证通过');
   }
}

//ts 支持类的简写,所以我们直接使用上面的写法 
// export class AppComponent1 {
//   public title:string;
//   constructor(title:string){
//     this.title = 'app works'
//   }
// }

