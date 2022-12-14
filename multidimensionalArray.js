
//Array to reproduce
/*

let testArray = [[0, 18], [1, 45], [45, 48], [-3, 2]];

console.log(testArray);
console.table(testArray);

*/

//Whrite and read multidimentionnal array to find the max value

let subArrayNumber;
let subArrayLenght;
let multiArray = [];
let maxValue = Number.NEGATIVE_INFINITY;


subArrayNumber = Number(prompt('Entrez le nombre de sous-tableaux :'));
subArrayLenght = Number(prompt('Entrez le nombre de cellule par sous-tableaux :'));

for (let i = 0; i < subArrayNumber; ++i) {
    multiArray[i] = [];
    for (let j = 0; j < subArrayLenght; ++j) {
        multiArray[i][j] = Number(prompt(`Rentrer le chiffre n° ${j + 1} du tableau ${i + 1}`));

        if (multiArray[i][j] > maxValue) {
            maxValue = multiArray[i][j]
        }
    }
}

console.table(multiArray);
console.log(`La valeur maximale est ${maxValue}`);