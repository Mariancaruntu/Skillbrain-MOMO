// Scrieti o functie care creaza un obiect pentru a pastra informatii despre reteta ta preferata

function myFavoriteRecipe(title, portionsNumber, ingredients) {
    let _titlu = title;
    let _portii =  portionsNumber;
    let _ingrediente = [...ingredients]; // Cream o copie a listei de ingrediente
    
    return {
       getTitlu() {
        return _titlu;
       },

       getPortii() {
           return _portii;
       },

       getIngrediente() {
           return _ingrediente;
       },

       addIngredient(newIngredient) {
           _ingrediente.push(newIngredient); // Adaugam un nou ingredient
       },
          
       print() {   
           console.log(`Reteta mea preferata este: ${_titlu}, pentru ${_portii} portii, cu urmatoarele ingrediente: ${_ingrediente.join(', ')}`);
       }
   };
}

// Crearea unui obiect pentru reteta ta preferata
const recipe = myFavoriteRecipe("pulpe de pui cu cartofi la cuptor", 2, ["pulpe de pui", "sare", "oregano", "patrunjel", "boia de ardei"]);

// Adaugam un ingredient suplimentar
recipe.addIngredient("usturoi");

// Afisam detaliile retetei
recipe.print(); // Apelam functia print() pentru a arata reteta

