import { RouterConfig } from '@angular/router';
import {SiteTemplate} from '../template/component';
import {PageOutlet} from '../client/page-outlet.component';
import {PageEdit} from './page-edit.component';

const EDITOR_ROUTES : RouterConfig  = [
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
    },
    {
      path: 'editor/:pageKey',
      component: PageEdit,
    },
    {
      path: 'editor',
      component: PageEdit
    }
  ]}
];

export default EDITOR_ROUTES;