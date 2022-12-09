// Déclaration de la variable
let prixHT;
let prixTTC;
const taxe = 1.196;

// Lecture de la valeur entrée dans la console
prixHT = prompt("Entrez le prix HT :");
prixTTC = prixHT * taxe;
prixTTC = prixTTC.toFixed(2);

// Affichage de la valeur de la variable dans la console
alert(`Votre prix TTC est égale à ${prixTTC}€ T.T.C10`);
clear = prixHT;
clear = prixTTC;
