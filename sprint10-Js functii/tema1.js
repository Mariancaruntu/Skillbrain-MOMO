//Scrieti o functie care returneaza patratul unui numar
//Functia findSquare(num) returneaza patratul numarului primit ca date de intrare(este transmis ca argument in apelul functiei)
//Exemplu 1:
//Input: num = 6
//Output: 36
//Exemplu 2:
//Input: num = 0
//Output: 0
//Exemplu 3:
//Input: num = -12
//Output: 144

const squareMap = new Map();

function findSquare(num) {
    // Verifica daca patratul numarului este deja salvat in map

if (squareMap.has(num)) {

return squareMap.get(num); // Returneaza valoarea salvata din map
    }

    }

 // Daca nu este salvat, calculeaza patratul

let result = num * num;

    // Salveaza rezultatul in map
    squareMap.
    squareMap.
set(num, result);


return result;

let num1 = 2
let num2 = 7
let num3 = 10

console.log("Patratul" + num1 + "este:" + findSquare(num1));
console.log("Patratul" + num2 + "este:" + findSquare(num2));
console.log("Patratul" + num3 + "este:" + findSquare(num3));

console.log("Patratele salvate: ", Array.from(squareMap));