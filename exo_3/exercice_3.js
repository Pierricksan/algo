// Ecrire un programme :
// chaque indice du tableau correspond à une matiere
// chaque indice des tableaux dans le tableau correspond à des notes par matière.combien de matiere ?
// par matiere combien de notes ?
// inserer les notes.pour chaque matiere : etablir la moyenne, la note max, la note inferieur.


function numAverage(putYourArray) {
  let a = putYourArray.length
  let c = 0
  let i = 0
  for (i = 0; i < a; i++) {
    c += Number(putYourArray[i])
  }
  return c / a
}

function foundMaxMarkTwo(putYourArray) {
  let max = 0;
  for (let i = 0; i < putYourArray.length; i++) {
    if (putYourArray[i] > max) {
      max = putYourArray[i];
    }
  }
  return max
}

function foundMinMarkTwo(putYourArray) {
  let min = 20;
  for (let i = 0; i < putYourArray.length; i++) {
    if (putYourArray[i] < min) {
      min = putYourArray[i];
    }
  }
  return min
}

let howClasses = prompt('Combien de matières ? ')

let globalArray = []
i = 1
while (i <= howClasses) {
  globalArray.push([])
  i++
}
for (let i = 0; i < howClasses; i++) {
  let howMarks = prompt(`Combien de notes dans la matière ${i + 1} ?`)
  for (let j = 0; j < howMarks; j++) {
    let mark = Number(prompt(` donner la note numéro ${j + 1} : `))
    globalArray[i].push(mark)
  }
  let avgMatiere = numAverage(globalArray[i]);
  let lightSideMark = foundMaxMarkTwo(globalArray[i]);
  let darkSideMark = foundMinMarkTwo(globalArray[i]);
  console.log(`
  la moyenne de la matière numéro ${i + 1} est de ${avgMatiere}
  `)
  console.log(`
  la note la plus haute de la matière numéro ${i + 1} est de ${lightSideMark}
  `)
  console.log(`
  la note la plus basse de la matière numéro ${i + 1} est de ${darkSideMark}
  `)
}

console.table(globalArray)
