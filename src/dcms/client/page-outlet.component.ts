import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {PageStore} from '../common/client-page.service';
import {ActivatedRoute, Event, Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'page-outlet',
    providers: [PageStore],
    template: `<div [innerHTML]='currentPage$ | async'></div>`
})
export class PageOutlet {
    public currentPage$ : Subject<any> = new Subject<any>();

    constructor(public store:PageStore,public route:ActivatedRoute, public router: Router){
        router.events.subscribe( (event:Event) => {
        if(event instanceof NavigationEnd){
            this.currentPage$ = store.getPage(event.url);
            //console.log("Trying to get page at", event.url);
            //this.currentPage$.subscribe((data) => console.log("Page Outlet Got:", data) ); 
        }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });

    }
    
}