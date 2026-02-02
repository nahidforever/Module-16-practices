let string = "Nahid Islam";

let count = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i].toLowerCase() === "a") {
    count++;
  }
}
console.log(count);
