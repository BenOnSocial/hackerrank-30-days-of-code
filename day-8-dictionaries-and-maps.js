function processData(input) {
    const inputLines = input.split("\n");
    const n = parseInt(inputLines[0]);
    let lines = inputLines.slice(1, n + 1);
    let friends = new Map();

    for (let line of lines) {
        let columns = line.split(" ");
        friends.set(columns[0], columns[1]);
    }

    lines = inputLines.slice(n + 1);

    for (let name of lines) {
        if (friends.has(name)) {
            console.log(`${name}=${friends.get(name)}`)
        } else {
            console.log("Not found");
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
