import { aoc_part1, aoc_part2 } from './src/aoc01';

console.time('execution_complete');

console.time('execution_part1');
console.log('PART1: ' + aoc_part1());
console.timeEnd('execution_part1');

console.time('execution_part2');
console.log('PART2: ' + aoc_part2());
console.timeEnd('execution_part2');

console.timeEnd('execution_complete');
