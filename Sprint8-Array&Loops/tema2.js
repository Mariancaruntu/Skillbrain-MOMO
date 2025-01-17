// Calculati suma numerelor dintr-un sir de numere

const array = [1, -5, 20, -34, 16, 29, 36, -4]

let output = 0;
array.forEach(element => {
    output += element;
});

console.log(output);