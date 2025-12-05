import {Routes} from '@angular/router';
import {Encoder} from './encoder/encoder';
import {AdventCalenderBody} from './advent-calendar/advent-calender-body';

export const routes: Routes = [
  {
    path: '',
    component: AdventCalenderBody
  },
  {
    path: 'create',
    component: Encoder
  }
];
