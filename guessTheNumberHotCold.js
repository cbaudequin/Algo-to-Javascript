let myNumber;
let randomNumber;

randomNumber = Math.random() * 100;
randomNumber = Math.round(randomNumber);
//Triche : console.log(randomNumber);

do {

    myNumber = prompt('number please 1 - 100')

    console.log(randomNumber);

    if (myNumber > randomNumber) {
        console.log(myNumber, "est trop haut");
    }

    else if (myNumber < randomNumber) {
        console.log(myNumber, "est trop bas");
    }

    else {
        console.log("Bravo tu as deviné que le nombre");
    }


} while (myNumber != randomNumber);

