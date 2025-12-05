import {Component, computed, inject, signal} from '@angular/core';
import {ContentService} from './content-service';
import {Door} from './door/door';
import {ImportDialog} from './import-dialog/import-dialog';
import {AdventCalendarDoor} from './model/advent-calendar-door';
import {DoorContent} from './door-content/door-content';

@Component({
  selector: 'app-advent-calender-body',
  imports: [
    Door,
    ImportDialog,
    DoorContent
  ],
  templateUrl: './advent-calender-body.html',
  styleUrl: './advent-calender-body.scss',
})
export class AdventCalenderBody {
  contentService = inject(ContentService);
  adventCalendarContent = computed(() => this.contentService.getContent());

  isAddingContent = signal(false);
  openedDoor: AdventCalendarDoor | undefined = undefined;

  onAddContent() {
    this.isAddingContent.set(true);
  }

  onCancelAdd() {
    this.isAddingContent.set(false);
  }
}
