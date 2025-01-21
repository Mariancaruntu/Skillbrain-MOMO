// Scrieti o functie care creaza un obiect pentru a pastra informatii despre reteta ta preferata

function myFavoriteRecipe(title, portionsNumber, ingredients) {
    let _titlu = title;
    let _portii = portionsNumber;
    let _ingrediente = [...ingredients]; // Cream o copie a listei de ingrediente
    
    return {

        // Getter pentru titlu
        getTitlu() {
            return _titlu;
        },

        // Getter pentru numarul de portii
        getPortii() {
            return _portii;
        },

        // Geter pentru ingrediente
        getIngrediente() {
            return _ingrediente;
        },
       
        // Setter pentru titlu
        setTitlu(newTitlu) {
            if (newTitlu && typeof newTitlu === 'string') {
                _titlu = newTitlu
            } else {
                console.log("Titlul trbuie sa fie un sir de caractere valid.");
            }
        },

        // Setter pentru numarul de portii
        setPortii(newPortii) {
            if (Number.isInteger(newPortii) && newPortii > 0) {
                _portii = newPortii;
            } else {
                console.log("Numarul de portii trebuie sa fie un numar pozitiv.")
            }   
        },
            
        // Adauga un ingredient doar daca nu este deja in lista    
        addIngredient(newIngredient) {
            if (newIngredient && typeof newIngredient === 'string') {
                if (!_ingrediente.includes(newIngredient)) {
                    _ingrediente.push(newIngredient); // Adaugam ingredientul doar daca nu exista deja
            } else {
                console.log(`Ingredientul "${newIngredient}" este deja adaugat.`);
            }      
            } else {
                console.log("Ingredientul trebuie sa fie un sir de caractere valid.");
            }
        },

        // Functia pentru a afisa reteta
        print() {
            console.log(`Reteta mea preferata este: ${_titlu}, pentru ${_portii} portii, cu urmatoarele ingrediente: ${_ingrediente.join(', ')}`);
        }
    };    
}

// Crearea unui obiect pentru reteta preferata
const recipe = myFavoriteRecipe("pulpe de pui cu cartofi la cuptor", 2, ["pulpe de pui", "sare", "oregano", "patrunjel", "boia de ardei"]);

// Adaugam un ingredient suplimentar
recipe.addIngredient("usturoi");

// Incercam sa adaugam un ingredient duplicat
recipe.addIngredient("pulpe de pui");

// Modificam titlul si numarul de portii
recipe.setTitlu("Pulpe de pui cu legume la cuptor");
recipe.setPortii(4);

// Afisam detaliile retetei
recipe.print(); 
           