// Ecrire un programme :qui vous demande combien de note vous voulez ?
// creer un tableau de la taille demandé.
// vous demande de rentrer chaque note.Indique la moyenne des notes.
// La note la plus haute.
// La note la plus faible.

let howMany = Number(prompt("How many mark(s) do you want to write ? "))

//creation du tableau avec le nombre demandé
let arrayMarks = []

for (let i = 0; i < howMany; i++) {
    let mark = prompt(`Ajouter la note numéro ${i + 1} : `)
    arrayMarks.push(mark)
    console.log(i)
    console.table(arrayMarks.length)
}

function numAverage(putYourArray) {
    let a = putYourArray.length
    let c = 0
    let i = 0;
    for (i = 0; i < a; i++){
      c += Number(putYourArray[i]);
    }
    return c/a;
  }

let minValue = Math.min(...arrayMarks)
let maxValue = Math.max(...arrayMarks)

console.log(`la note maximum est ${maxValue} et la note minimale est ${minValue}`)
console.log(`la moyenne de la classe est de ${numAverage(arrayMarks)}`)

console.table(arrayMarks)
