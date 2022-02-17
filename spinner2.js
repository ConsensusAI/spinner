// const readline = require("readline");
// r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("How many revolutions?\nRevolutions: ", (input) => {
//   if (input === "\u0003") {
//     output.write("Thanks for using spinner!");
//     r1.close();
//   }

//   if (input > 0 && !isNaN(input)) {
//     spinner2(input);
//     r1.close();
//   }
// });

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

process.stdout.write("How many revolutions?\nRevolutions: ");
stdin.on("data", (input) => {
  if (input === "\u0003") {
    process.stdout.write("Bye!");
    process.exit();
  }

  if (input > 0 && !isNaN(input)) {
    process.stdout.write(input + "\n");
    spinner2(input);
  }
});

const spinner2 = (spins) => {
  let delay = 100;
  let spin = "|/-\\|";
  let revolutions = 0;
  while (revolutions < spins) {
    for (const char of spin) {
      delay += 200;
      setTimeout(() => {
        process.stdout.write("\r" + char + "   ");
      }, delay);
    }
    revolutions++;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay + 50);
  setTimeout(() => {
    process.exit();
  }, delay + 51);
};
