//Scrieti o functie pentru a gasi numarul de aparitii al unei litere intr-un sir
//Functia letterCount()) returneaza numarul aparitiei al unei litere trimise ca parametru dintr-un sir dat
//Exemplu 1:
//Input: sir = "imi place programarea" litera = "a"
//Output: 4
//Exemplu 2:
//Input: sir = "Vreau sa lucrez in IT", litera = "r"
//Output: 2

function letterCount(sir, litera) {
    litera = litera.toLowerCase();
    sir = sir.toLowerCase();

    return sir.split('').reduce((count, char) => { 
        return char === litera ? count + 1 : count;
    }, 0);
}

console.log(letterCount("imi place programarea", "a")); // Output: 4
console.log(letterCount("Vreau sa lucrez in IT", "r")); // Output: 2
