import { bootstrap as webBootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter, RouterConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import {prebootComplete} from 'angular2-universal';

export function bootstrap(ngApp:any, localDeps:any[], routes: RouterConfig){
   var strap = webBootstrap(ngApp, [...HTTP_PROVIDERS, provideRouter(routes),...localDeps]);
   strap.then(prebootComplete);
   return strap;    
}