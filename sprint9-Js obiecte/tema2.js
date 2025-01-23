//Scrieti o functie care returneaza un obiect nou fara proprietatile furnizate
//Functia primeste 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celalalt este proprietatea care nu se doreste sa persiste in rezultatul returnat
//Exemplu 1:
//Imput: obiect = { a: 1, b: 2 }, proprietate = "b"
//Output: { a: 1 }


console.log(getProperty(obiect, "b"));
console.log(obiect);

function getProperty(obiect, proprietate) {
    const obiect2 = Object.assign({}, obiect); // Cream o copie a obiectului  
    delete obiect2[proprietate]; //Stergem proprietatea
    return obiect2;
}

const obiect = { a: 1, b: 2 };    
console.log(getProperty(obiect, "b")); // { a: 1 }
console.log(obiect); // { a: 1, b: 2 }
