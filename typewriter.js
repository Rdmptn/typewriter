const sentence = "hello there from lighthouse labs";

delay = 0;

for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);

