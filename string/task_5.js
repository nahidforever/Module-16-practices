let str = "programming hero is amazing";

let words = str.split(' ');

for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let captialStr = words.join(' ');

console.log(captialStr);
