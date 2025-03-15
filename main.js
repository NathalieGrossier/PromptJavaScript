//Saisie utilisateur

let patternAge = /^\d{0,2}$/;
let age = parseInt(prompt("Veuillez saisir votre age"));
console.log(age);
let testRegexAge = patternAge.test(age);
console.log(testRegexAge);
while (!testRegexAge) {
  age = parseInt(
    prompt("Veuillez saisir votre age (de 0 à 99 ans en chiffres uniquement)")
  );
  testRegexAge = patternAge.test(age);
}
// console.log(`age : `, toto);

// console.log("age :", typeof age, "valeur :", age);

let textAffichage = "Vous êtes ";

if (age >= 18) {
  console.log(`${textAffichage} majeur !`);
} else if (age < 18 && age > 12) {
  console.log(`${textAffichage} mineur !`);
} else if (age === 12) {
  console.log(`bug`);
}
