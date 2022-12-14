let a;
let b;

function compare(a, b) {
    if (a > b) {
        return 0;
    } else {
        return 1;
    }
};

console.log(compare(prompt('Rentrez a :'), prompt('Rentrez b :')));