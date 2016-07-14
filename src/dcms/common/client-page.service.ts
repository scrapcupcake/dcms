import {Injectable, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import {Subscription} from 'rxjs/Subscription';


@Injectable()
export class PageStore{
    public store$ : any;
    constructor(public http: Http){
        // use services for http calls
        this.store$ = this.http.get('/data.json').map((res) => res.json())
    }

    
    getPage(url:string){
        var pageobv$ = this.store$.map((item) => {
            if( !!item && !!item.pages && !!item.pages.length) {
                var pages = item.pages.filter((p) => p.key === url);
                if(pages.length > 0){
                    console.log("Should return page from ", pages[0].content);
                    return pages[0].content;
                }
            }
            return "<h1>404, page not found</h1>";
        });
        return pageobv$;
    }
}