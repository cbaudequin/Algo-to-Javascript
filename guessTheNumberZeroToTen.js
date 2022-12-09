let myNumber;
let randomNumber;

do {
    randomNumber = Math.random() * 10;
    randomNumber = Math.round(randomNumber);
    myNumber = prompt('Devinez un chiffre entre 0 et 10')
    if (myNumber != randomNumber) {
        console.log(`Dommage c'est perdu, le chiffre était : ${randomNumber}`);
    }

} while (myNumber != randomNumber)

console.log(`Bravo tu as deviné que le chiffre était : ${randomNumber}`);

