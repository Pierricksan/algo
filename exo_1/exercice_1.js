// faire une fonction factorielle avec condition if et ternaire 

function factorielleIf(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorielleIf(n-1);
    }
}

function factorielleTern(a) {
    return a == 0
    ?  1
    : a*factorielleTern(a-1);
}

let choix = prompt("saisissez un chiffre");

console.log(`fait avec la condition if ${factorielleIf(choix)}`);
console.log(`fait avec la condition tern ${factorielleTern(choix)}`);
