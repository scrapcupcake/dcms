import {Directive, Component, OnInit, OnDestroy, Input, Inject} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {parseKey} from '../common/pages-helpers';
import {PageStore} from './editor-page.service';

@Component({
  selector: "page-edit",
  providers: [PageStore],
  template: `
                <form (submit)="save($event)">
                <textarea  cols="72" rows="12" [(ngModel)]="PageContent"></textarea><br>
                <button>Save</button>
                <button (click)="cancel($event)">Cancel</button>
                </form>
             `
})
export class PageEdit implements OnInit, OnDestroy{
  @Input() public PageContent : string;
  private previousPageContent : string;
  private paramSub : any;
  private pageKey : string;

  constructor(
    private store: PageStore,
    private router: Router,
    private route: ActivatedRoute
  ){} //Body left blank

  ngOnInit(){
    this.paramSub = this.route.params.subscribe( params => {
      this.pageKey = parseKey(params);
      //this.previousPageContent = this.PageContent = this.store.getPage(this.pageKey);
    });
  }

  ngOnDestroy(){
    this.paramSub.unsubscribe();
  }

  save(event){
    event.preventDefault();
    //this.store.savePage(this.pageKey, this.PageContent);
    this.gotoView();
  }

  cancel(event){
    event.preventDefault();
    this.PageContent = this.previousPageContent;
    this.gotoView();
  }

  gotoView(){
    this.router.navigate([".."], { relativeTo: this.route });
  }
}
