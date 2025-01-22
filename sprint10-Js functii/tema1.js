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

function findSquare(num) {
    let result = num * num;
    return result;
}

let num1 = 2
let num2 = 7
let num3 = 10

// Afisam patratele numerelor
console.log("Patratul lui " + num1 + "este: " + findSquare(num1));
console.log("Patratul lui " + num2 + "este: " + findSquare(num2));
console.log("Patratul lui " + num3 + "este: " + findSquare(num3));

// Daca vrem sa salvam rezultatele intr-un obiect sau array
let squareMap = {
    num1: findSquare(num1),
    num2: findSquare(num2),
    num3: findSquare(num3)
};
console.log("Patratele salvate: ", squareMap);