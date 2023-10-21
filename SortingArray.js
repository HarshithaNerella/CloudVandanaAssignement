const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", function(input) {
  
    const numbers = input.split(' ').map(Number);

  
    numbers.sort(function(a, b) {
        return b - a;
    });

    console.log("Sorted numbers in descending order: " + numbers.join(', '));

    rl.close();
});
