import {Injectable, signal} from '@angular/core';
import {type AdventCalendarDoor} from './model/advent-calendar-door';

const STORAGE_KEY = 'advent-calendar-content'

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contentSignal = signal<AdventCalendarDoor[]>(this.loadFromStorage());
  content = this.contentSignal.asReadonly();

  loadFromStorage(): AdventCalendarDoor[] {
    let storage = localStorage.getItem(STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  }

  setContent(content: AdventCalendarDoor[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    this.contentSignal.set(content);
  }
}
