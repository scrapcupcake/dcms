import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'body', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES
   ],
  template: `
  <router-outlet></router-outlet>
  `
})
export class App {
  data = {};
  
  constructor(public http: Http) { }

  ngOnInit() {
  
    // use services for http calls
    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
