// Returneaza numarul de vocale dintr-un sir de caractere (string)

const text = "string de text"

function getNumberVocale(text) {
    const vowels = [`a`, `e`, `i`, `o`, `u`];
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(getNumberVocale(text))