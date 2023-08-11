function processData(input) {
    const inputs = input.split("\n");
    const n = parseInt(inputs[0]);

    for (let i = 1; i < inputs.length; i++) {
        let even = [];
        let odd = [];
        const s = inputs[i];
        for (let j = 0; j < s.length; j++) {
            const character = s.charAt(j);
            j % 2 == 0 ? even.push(character) : odd.push(character);
        }

        console.log(even.join("") + " " + odd.join(""));
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
