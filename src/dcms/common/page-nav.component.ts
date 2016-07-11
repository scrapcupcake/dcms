import {Component, Input} from '@angular/core';

@Component({
    selector: 'page-nav',
    template: `<ul>
                    <li *ngFor='let navLink of navLinks'>
                        <a [href]='navLink.href'>{{navLink.text}}</a>
                    </li>
                </ul>`
})
export class PageNav {
    @Input() linkPrefix : string;
}