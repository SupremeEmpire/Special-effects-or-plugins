//main.ts 应用入口文件

//ng2提供了一组JS模块,把这些模块看成库模块
//每个 ng2库的名字都带有 @angular 前缀 

//导入模块 
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//判断当期的项目环境,
// 如果为生产环境,进入生产模式 
if (environment.production) {
  enableProdMode();
}
//手动启动angular2的应用程序 
//启动的是根模块 AppModule 
platformBrowserDynamic().bootstrapModule(AppModule);
