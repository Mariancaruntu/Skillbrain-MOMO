//Scrieti o functie pentru a gasi numarul de aparitii al unei litere intr-un sir
//Functia letterCount()) returneaza numarul aparitiei al unei litere trimise ca parametru dintr-un sir dat
//Exemplu 1:
//Input: sir = "imi place programarea" litera = "a"
//Output: 4
//Exemplu 2:
//Input: sir = "Vreau sa lucrez in IT", litera = "r"
//Output: 2

function letterCount(sir, litera) {
    // Transformam atat sirul cat si litera intr-un format uniform
    litera = litera.toLowerCase();

    let count = 0;

    // Parcurgem sirul si numaram aparitiile literei
    for (let i = 0; i < sir.length; i++) {
        if (sir[i] === litera) {
            count++;
        }
    }

    return count;
}


console.log(letterCount("imi place programarea", "a"));
console.log(letterCount("Vreau sa lucrez in IT", "r"));
