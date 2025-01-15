//Creati o sir de obiecte in care fiecare obiect descrie o carte si are proprietati precum titlu (un sir de caractere - string), autor (un sir de caractere - string) si esteCitita (un boolean care indica daca ati citito)
//Exemplu 1:

//Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true}, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

//Output:

//"Carte 1 de Autor 1"
//"Ai citit deja "Carte 1" de Autor 1"
//"Carte 2 de Autor 2"
//"Trebuie sa citesti "Carte 2" de Autor 2"

let carti = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", este_citita: true },
    { titlu: "O fata de moda veche", autor: "Louisa May Alcott",este_citita: false }
];

function afiseazaMesaj(carte) {
    const mesaj = `"${carte.titlu}" de ${carte.autor}`;
    return carte.este_citita
        ? `${mesaj}\nAi citit deja "${carte.autor}`
        : `${mesaj}\nTrebuie sa citesti "${carte.titlu}" de ${carte.autor}`;
}

carti.forEach(carte => console.log(afiseazaMesaj(carte)));
