let delay = 100;
let spin = "|/-\\|";
let revolutions = 0;
while (revolutions < 2) {
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
