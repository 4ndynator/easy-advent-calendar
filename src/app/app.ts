import {Component} from '@angular/core';
import {Header} from './header/header';
import {AdventCalenderBody} from './advent-calendar/advent-calender-body';

@Component({
  selector: 'app-root',
  imports: [Header, AdventCalenderBody],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
