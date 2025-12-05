import {Component, computed, inject, input} from '@angular/core';
import {ContentService} from '../content-service';

@Component({
  selector: 'app-door',
  imports: [],
  templateUrl: './door.html',
  styleUrl: './door.scss',
})
export class Door {
  contentService = inject(ContentService);
  day = input.required<number>();

  dayContent = computed(() =>
    this.contentService.getDoorContent(this.day()))
}
