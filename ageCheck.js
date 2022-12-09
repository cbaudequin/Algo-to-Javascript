let currentAge;
currentAge = prompt("Your current age is");

//Ma solution

/*

if (currentAge < 13) {
  alert("You can watch Action Man kid");
} else if (currentAge >= 13 && currentAge < 18) {
  alert("You can watch Matrix teenage boy");
} else {
  alert("You can go deep boy, you'r old enought");
}

*/

//Corrigé

if (currentAge >= 18) {
  alert("You can go deep boy, you'r old enought");
} else if (currentAge >= 13) {
  alert("You can watch Matrix teenage boy");
} else {
  alert("You can watch Action Man kid");
}
