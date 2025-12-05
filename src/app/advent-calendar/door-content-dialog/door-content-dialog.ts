import {Component, input, output} from '@angular/core';
import {AdventCalendarDoor} from '../model/advent-calendar-door';

@Component({
  selector: 'app-door-content',
  imports: [],
  templateUrl: './door-content-dialog.html',
  styleUrl: './door-content-dialog.scss',
})
export class DoorContentDialog {
  content = input.required<AdventCalendarDoor>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
