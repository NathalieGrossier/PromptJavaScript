let nombre = 0;
let textRegexNombre = true;
let nombreRandom = Math.floor(Math.random() * 101);
let tentative = 1;
let DEBUG = "INFO DÉBUG : Le nombre à trouver est";

console.log(`${DEBUG} ${nombreRandom}`);
console.log("Bienvenue ! Vous avez 5 tentatives !");

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

function demanderNombre() {
  rl.question("Entrez un nombre entre 0 et 100 : ", (nombre) => {
    nombre = parseInt(nombre);

    if (nombre < 1 || nombre > 100) {
      console.log("Erreur");
      return demanderNombre();
    }

    if (nombre === nombreRandom) {
      console.log("Félicitations, vous avez trouvé le bon numéro !!");
      console.log(`Nombre d'essai(s) : ${tentative}`);
      demanderRejouer();
    } else {
      tentative++;
      if (tentative > 5) {
        console.log("PERDU !! Vous avez atteint 5 tentatives.");
        demanderRejouer();
      } else {
        if (nombre < nombreRandom) {
          console.log("Veuillez saisir un nombre plus grand :");
        } else {
          console.log("Veuillez saisir un nombre plus petit :");
        }
        demanderNombre();
      }
    }
  });
}

function demanderRejouer() {
  rl.question("Voulez-vous rejouer ? yes / no : ", (answer) => {
    answer = answer.toLowerCase();
    if (answer === "yes") {
      tentative = 1;
      nombreRandom = Math.floor(Math.random() * 101);
      console.log("Et c'est reparti !!!");
      console.log(`${DEBUG} ${nombreRandom}`);
      demanderNombre();
    } else if (answer === "no") {
      console.log("Merci d'avoir joué avec nous ! A bientôt");
      rl.close();
    } else {
      console.log("Veuillez répondre par 'yes' ou 'no' !");
      demanderRejouer();
    }
  });
}

demanderNombre();
