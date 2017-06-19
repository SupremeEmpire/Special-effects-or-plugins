//多个模块公用的内容,可以封装成一个新模块
//哪个模块需要使用,把新模块作为依赖导入即可
angular.module('modal',[])
.directive('zyModal',function(){
    return{
        restrict:'E',
        replace:true,
        
        templateUrl:'./template/modal.html',
        // transclude 嵌入,渗透,与ng-transclude 配合使用
        //能够把一段html嵌入到 ng-transclude 所在的标签的内部 
        transclude:true,
        //隔离作用域 
        /*当我们需要创建一个重复使用的指令时,就不能再依赖父级作用域了, 
        因为在不同的位置使用指令时,对应的父作用域不一样,这时就需要指令有
        自己的作用域,使用隔离作用域, scope:{}
        如果想要将父作用域的属性传递给指定的作用域对象,在使用隔离作用时,
        有三种方式与隔离之外的作用域进行交互:@、=、&
        
        @:只能绑定普通的字符串(在指令上写了什么属性就是什么,注意大小写转换)(@ 的绑定是单向的)
        比如:modalTitle:'@',modalTitle属性的值来源于同名的modal-title属性
        cancleTitle:'@modalCancleTitle',cancleTitle属性的值来源于modal-cancle-title
        
        =:需要实现双向数据绑定时使用,指令作用域中的属性同父作用域的属性进行双向绑定 
        &:表示绑定一个函数,把父作用域中的函数绑定在指令作用域中
        modalConfirmAction:'&'表示该属性的值是一个function,来源于同名的 modal-confirm-action
        
        */
        scope:{
           modalId:'@',
           modalTitle:'@',
           modalConfirmTitle:'@',
           cancleTitle:'@modalCancleTitle',
           modalConfirmAction:'&'
        },
        link:function($scope,ele,attrs){
              console.log($scope);
              console.log(attrs);
        }
    }
})