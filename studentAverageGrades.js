const grades = [];
let studentNumber;
studentNumber = prompt("Combien d'élèves dans votre classe ?");
grades.length = studentNumber;

for (let i = 0; i < grades.length; i++) {
    grades[i] = prompt(`Rentrer la note n° : ${i + 1}`)
}

console.log(grades);

