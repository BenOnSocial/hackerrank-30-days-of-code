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
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let sums = [];

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            let sum = 0;
            sum += arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
            sum += arr[row + 1][col + 1];
            sum += arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            sums.push(sum);
        }
    }

    console.log(Math.max(...sums));
}
