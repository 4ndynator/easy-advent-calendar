import {Component, input, output} from '@angular/core';
import {AdventCalendarDoor} from '../model/advent-calendar-door';

@Component({
  selector: 'app-door-content',
  imports: [],
  templateUrl: './door-content.html',
  styleUrl: './door-content.scss',
})
export class DoorContent {
  content = input.required<AdventCalendarDoor>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
