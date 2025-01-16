//Scrieti o functie pentru a adauga numere nelimitate

//Functii addNumber() returneaza suma tuturor numerelor transmise ca argumente functiei. Numarul de argumente nu este definit. Se poate transmite un numar nelimitat de numere

//Exemplu 1:

//Input: addNumber(1, 2, 3)

//Output: 6

//Exemplu 2:

//Input: addNumber(1, 2, 3, 4, 5)

//Output: 15

function addNumber() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(addNumber(1, 2, 3, 4));
console.log(addNumber(20, 30, 40));

