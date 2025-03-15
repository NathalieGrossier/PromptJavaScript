let patternAge = /^\d{0,2}$/;
let age = 0;
let textRegexAge = true;
do {
  //   if (!textRegexAge) {
  //     age = parseInt(prompt("Veuillez saisir des nombres :"));
  //   } else {
  //     age = parseInt(prompt("Veuillez saisir des nombres"));
  //   }
  age = parseInt(
    prompt(`Veuillez saisir ${!textRegexAge ? "des nombres" : "votre age"}`)
  );
  textRegexAge = patternAge.test(age);
} while (!textRegexAge);

let textAffichage = "Vous êtes ";

if (age >= 18) {
  console.log(`${textAffichage} majeur !`);
} else if (age < 18 && age > 12) {
  console.log(`${textAffichage} mineur !`);
} else if (age === 12) {
  console.log(`bug`);
}
