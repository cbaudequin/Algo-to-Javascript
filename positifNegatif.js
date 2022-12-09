let A;
let B;
let total;

A = prompt("Entrer A");
B = prompt("Entrer B");
total = A * B;

//Solution 1

if (total > 0) {
  alert(`${total} est positif`);
} else if (total < 0) {
  alert(`${total} est négatif`);
} else {
  alert(`${total} est égale à 0`);
}

//Solution 2

/*
if (Math.sign(total) === 1) {
    alert(`${total} est positif`)
    
} else if (Math.sign(total) === 0) {
    alert(`${total} est égale à 0`)
}

    else {
        alert(`${total} est négatif`)
}
*/
