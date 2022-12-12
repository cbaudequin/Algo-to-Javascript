const gradesString = [];
let studentNumber;
let average;
let plusAverage = 0;
let lessAverage = 0;

//how many student notes

studentNumber = prompt("Combien de notes d'élève à rentrer ?");

//The length of the table is defined by the number of grades

gradesString.length = studentNumber;

//The for loop allows us to put one by one the grade

for (let i = 0; i < gradesString.length; i++) {
    gradesString[i] = prompt(`Rentrer la note n° : ${i + 1}`)
}

console.log(`Nombre d'élève : ${studentNumber}`);
console.log(gradesString);

//We convert the string array in to a number array

const gradesNumber = gradesString.map(str => {
    return Number(str);
});

console.log(gradesNumber);

//We do the sum of our fresh number array and place it in a let : total

let total = 0;

for (const gradeValue of gradesNumber) {
    total += gradeValue;
}

console.log(`Le total des notes est de ${total}`)

//We calcul the average grade of our student

average = total / studentNumber;

console.log(`La moyenne des notes est de : ${average}`);

//How many student are below the average of student grades

for (let i = 0; i < gradesNumber.length; i++) {

    if (gradesNumber[i] < average) {
        lessAverage++;
    } else {
        plusAverage++;
    }
}

console.log(`${lessAverage} élèves sont en dessous de la moyenne de la classe`);
console.log(`${plusAverage} élèves sont au dessus de la moyenne de la classe`);