const lines = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const rotations = 4;
let delay = 0;
let counter = 0;

for (let i = 1; i <= rotations; i++) {
  for (const el of lines) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(el);
      counter += 0.25;
      if (counter >= rotations) {
        console.log('\n');
      }
    }, delay);
  }
}



