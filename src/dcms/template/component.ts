import { Component, ViewEncapsulation } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PageNav} from "../common/page-nav.component";
const site_template = require('./template.html');
const site_css = require('./template.css');

@Component({
    selector: 'site-template',
    template: site_template,
    styles: [site_css],
    directives: [...ROUTER_DIRECTIVES, PageNav],
    encapsulation: ViewEncapsulation.None,
})
export class SiteTemplate{
    
}