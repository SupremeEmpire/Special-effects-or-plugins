//自定义管道

//Pipe 管道类的装饰器
//PipeTransform 自定义管道时 遵循的接口  
import { Pipe, PipeTransform } from '@angular/core';

// @Pipe()装饰器的name属性,用来指定管道的名称
@Pipe({
  name: 'book'
})
//声明并导出管道类
//定义管道类的时候,需要实现 PipeTransform 接口  
export class BookPipe implements PipeTransform {
 //transform() 是自定义管道时要使用的方法
 //这个方法接受一个输入参数 和 若干可选参数,
 //最后使用return返回处理结果
  transform(value: any, args?: any): any {
    console.log(arguments);
    if(arguments.length == 1){
      return '<'+value+'>';
    }else if(arguments.length == 2){
      return arguments[1] + value + arguments[1];
    }else if(arguments.length == 3){
      return arguments[1] + value + arguments[2];
    }
    return null;
  }

}
