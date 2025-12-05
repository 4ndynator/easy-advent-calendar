import {Component, computed, inject, signal} from '@angular/core';
import {ContentService} from './content-service';
import {ImportDialog} from './import-dialog/import-dialog';
import {AdventCalendarDoor} from './model/advent-calendar-door';
import {DoorContent} from './door-content/door-content';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-advent-calender-body',
  imports: [
    ImportDialog,
    DoorContent,
    RouterLink
  ],
  templateUrl: './advent-calender-body.html',
  styleUrl: './advent-calender-body.scss',
})
export class AdventCalenderBody {
  contentService = inject(ContentService);
  adventCalendarContent = computed(() => this.contentService.content());

  isAddingContent = signal(false);
  openedDoor: AdventCalendarDoor | undefined = undefined;

  onAddContent() {
    this.isAddingContent.set(true);
  }

  onCancelAdd() {
    this.isAddingContent.set(false);
  }

  isDoorClickable(day: number){
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    return currentMonth === 12 && day <= currentDay;
  }
}
