// the polyfills must be the first thing imported
import 'angular2-universal/polyfills';


// Angular 2
import {enableProdMode} from '@angular/core';
enableProdMode();

// Angular 2 Universal
import { bootstrap } from '../bootstrap.web';

// Application
import {App} from './app.component';
import routes from './routes';

bootstrap(App, [], routes);