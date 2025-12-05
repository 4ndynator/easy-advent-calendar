import {AdventCalendarDoor} from '../../model/advent-calendar-door';

export function parseLinesToContent(input: string): AdventCalendarDoor[] {
  return input
    .split('\n')
    .map((line, index) => ({
      day: index + 1,
      title: '',
      description: line.trim()
    }))
    .filter(door => door.description.length > 0);
}
