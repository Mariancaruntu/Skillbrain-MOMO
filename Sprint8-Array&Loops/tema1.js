// Numerele pare de la 0 la 10

let n = 10;
let text = "";

for (let i = 0; i<= n; i++) {
    if (i % 2 === 0) {
        text += i + " ";
    }
} 

console.log(text);