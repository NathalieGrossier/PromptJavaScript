let nombreRandom = Math.floor(Math.random() * 101);
let tentative = 1;

console.log("INFO DÉBUG : Le nombre à trouver est : " + nombreRandom);
console.log("Bienvenue ! Vous avez 5 tentatives !");

const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

function demanderNombre() {
  rl.question("Entrez un nombre entre 0 et 100 : ", (nombre) => {
    nombre = parseInt(nombre);
    console.log("Votre nombre est : " + nombre);

    // Vérifie si le nombre est dans la plage correcte
    if (nombre < 1 || nombre > 100) {
      console.log("Erreur, ce nombre n'est pas compris entre 1 et 100");
      return demanderNombre(); // Re-demande un nombre valide
    }

    // Comparer avec le nombre à trouver
    if (nombre === nombreRandom) {
      console.log("Félicitations, vous avez trouvé le bon numéro !!!!");
      console.log(`Nombre d'essai(s) : ${tentative}`);
      rl.close();
    } else {
      tentative++;
      if (tentative > 5) {
        console.log("Désolé, vous avez dépassé le nombre de tentatives !");
        rl.close();
      } else {
        if (nombre < nombreRandom) {
          console.log("Veuillez saisir un nombre plus grand :");
        } else {
          console.log("Veuillez saisir un nombre plus petit :");
        }
        demanderNombre(); // Demande un autre nombre
      }
    }
  });
}

// demanderNombre();
