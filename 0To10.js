//Ma solution qui marche pas

/*

let myNumber;
myNumber = prompt("Entrez un nombre compris entre 0 et 10");

while (myNumber < 0 && myNumber > 10) {
  console.log("Vous vous trompez gros naze");
  myNumber = prompt("Deuxième chance (de 0 à 10 on a dit) : ");
}

console.log("Bien joué balourd");

*/

//Solution ChatGpt

let myNumber;

// Demande à l'utilisateur d'entrer un nombre jusqu'à ce qu'il entre un nombre valide
do {
  myNumber = prompt("Entrez un nombre compris entre 0 et 10 :");

  if (myNumber < 0 || myNumber > 10) {
    console.log("Vous vous trompez gros naze");
  }
} while (myNumber < 0 || myNumber > 10);

console.log("Bien joué balourd");

//Corrigé
