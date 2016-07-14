import {RouterConfig} from '@angular/router';
// Angular 2 Universal
import {
  REQUEST_URL,
  ORIGIN_URL,
  NODE_LOCATION_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export function bootstrap(ngApp:any, localDeps:any[], routes: RouterConfig){
    return function(activeRoute?:string){
        let baseUrl = '/';
        let url = activeRoute || '/';


        let config: ExpressEngineConfig = {
        directives: [
        ngApp
        ],
        platformProviders: [
        {provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
        {provide: APP_BASE_HREF, useValue: baseUrl},
        ],
        providers: [
        {provide: REQUEST_URL, useValue: url},
        NODE_HTTP_PROVIDERS,
        provideRouter(routes),
        NODE_LOCATION_PROVIDERS
        ],
        async: false,
        preboot: false, // { appRoot: 'app' } // your top level app component selector
        
     };
     return config;
    }
}