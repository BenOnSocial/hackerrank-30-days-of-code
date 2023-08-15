'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const binary = n.toString(2);
    let count = 0;
    let max = count;

    for (let letter of binary) {
        count = letter == "1" ? count += 1 : 0;
        if (max < count) {
            max = count;
        }
    }

    console.log(max);
}
