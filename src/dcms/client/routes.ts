import { RouterConfig } from '@angular/router';
import {SiteTemplate} from '../template/component';
import {PageOutlet} from './page-outlet.component';

const PAGE_ROUTES : RouterConfig  = [
  {path: '',
   component: SiteTemplate,
  children: [
    {
      path: `:pageKey`,
      component: PageOutlet
    },
    {
      path: '',
      component: PageOutlet
    }
  ]}
];

export default PAGE_ROUTES;