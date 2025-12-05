import {AdventCalendarDoor} from '../../model/advent-calendar-door';

export function parseLinesToContent(input: string): AdventCalendarDoor[] {
  return input
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map((line, index) => ({
      day: index + 1,
      title: '',
      description: line
    }));
}
