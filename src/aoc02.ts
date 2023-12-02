import  { readStringList } from './importer';

export function aoc_part1(): number { 
    return (readStringList('./assets/aoc02.txt') as string[]).map(parse)
        .filter(filterGames).map(a => a.game).reduce((a,b) => a + b); 
}
export function aoc_part2(): number { 
    return (readStringList('./assets/aoc02.txt') as string[]).map(parse)
        .map(a => a.blue * a.red * a.green).reduce((a,b) => a + b); 
}

function getMax(input: string, regex: RegExp): number {
    const matchIterator = input.matchAll(regex);
    let nextElem = matchIterator.next().value;
    let max = 0;

    while (nextElem) {
        let newMax = parseInt(nextElem[0].split(' ')![0], 10);
        if (newMax > max) {
            max = newMax;
        }
        nextElem = matchIterator.next().value;
    }

    return max;
}

function parse(input: string): any {
    return {
        game: parseInt(input.match(/Game \d*/)![0].split(' ')![1], 10),
        blue: getMax(input, /\d* blue/g),
        red: getMax(input, /\d* red/g),
        green: getMax(input, /\d* green/g)
    };
}

function filterGames(input: any): boolean {
    const blueMax = 14;
    const redMax = 12;
    const greenMax = 13;
    return input.green <= greenMax && input.blue <= blueMax && input.red <= redMax;
}
