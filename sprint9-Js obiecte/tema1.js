// Scrieti o functie care creaza un obiect pentru a pastra informatii despre reteta ta preferata

function myFavoriteRecipe(title, portionsNumber, ingredients) {
    return {
      title,
      portions: portionsNumber,
     ingrediente: [...ingredients], // Cream o copie a listei de ingrediente
    }  
 }
           