import {Injectable} from '@angular/core';
import {type AdventCalendarDoor} from './model/advent-calendar-door';

const STORAGE_KEY = 'advent-calendar-content'

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getContent(): AdventCalendarDoor[] {
    let storage = localStorage.getItem(STORAGE_KEY);
    if (!storage) {
      return []
    }
    return JSON.parse(storage)
  }

  getDoorContent(day: number): AdventCalendarDoor | undefined {
    return this.getContent().find((door) => door.day === day)
  }

  setContent(content: AdventCalendarDoor[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
  }
}
