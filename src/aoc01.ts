import  { readStringList } from './importer';

export function aoc_part1(): number { 
    return (readStringList('./assets/aoc01.txt') as string[])
        .map(toNumber).reduce((a,b) => a + b); 
}

export function aoc_part2(): number { 
    return (readStringList('./assets/aoc01.txt') as string[]).map((s) => parseNumbers(s))
        .map(toNumber).reduce((a,b) => a + b); 
}

function replaceNumbers(input:string) {
    return input.replace(/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)/g, function (input: string): string {
        switch(input) {
            case 'zero': return '0o';
            case 'one': return '1e';
            case 'two': return 't2o';
            case 'three': return 't3e';
            case 'four': return '4';
            case 'five': return '5e';
            case 'six': return '6';
            case 'seven': return '7n';
            case 'eight': return 'e8t';
            case 'nine': return 'n9e';
            case 'ten': return 't10n';
            case 'eleven': return 'el11n';
            case 'twelve': return 't12e';
            case 'thirteen': return 't13n';
            default: return '';
        }
    }).replace(/(\d)teen/g, "1$1")
    .replace(/(\d)(hundred|thousand)/g, "$10")
}

function parseNumbers(input:string, secondrun = false): string {
    if (secondrun) {
        return replaceNumbers(input);
    }
    return parseNumbers(replaceNumbers(input), true) // zeroes in the middle do not count
}

function toNumber(input:string): number {
    return parseInt(input.match(/^[^\d]*(\d)/)![1] + input.match(/(\d)(?!.*\d)/)![1]);
}