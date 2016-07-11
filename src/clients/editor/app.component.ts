import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES
   ],
  template: `<h1>I am the editor!!!</h1>
             <router-outlet></router-outlet>
  `
})
export class App {
  
  constructor() { }

}
