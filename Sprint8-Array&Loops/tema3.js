// Creati o functie care inverseaza un sir de numere

const array1 = [1, -5, 20, -34, 16, 29, 36, -4]

function reverseArray(array1) {
    return [...array1].reverse();
}

const array2 = reverseArray(array1);

console.log("array1 = ", array1);
console.log("array2 = ", array2);