
//Scrieti o functie pentru a genera un numar aleatoriu mai mare sau egal cu o variabila start si strict mai mic decat o variabila end.Aceste doua variabile sunt capetele intervalului pentru numarul general: [start, end]
//Functia getRandom(start, end) returneaza un numar intreg aleator generat in intervalul definit de variabilele de inceput si sfarsit furnizate

//Exemplu 1:

//Input: start = 3, end = 5

//Output: <un numar mai    3 si < 5>  
function getRandom(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('Ambele valori trebuie sa fie numere.');
    }
    if (start >= end) {
        throw new Error('Start trebuie sa fie mai mic decat end.');
    }

    const numbersInRange = Array.from({ length: end - start }, (_, i) => start + i);

    return numbersInRange[Math.floor(Math.random() * numbersInRange.length)];
}

let start = 1;
let end = 5;

let numberRandom = getRandom(start, end);
console.log("Numarul aleatoriu intre " + start + " si " + end + " este: " + numberRandom);