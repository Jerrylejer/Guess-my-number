'use strict';

// // Aller chercher un élément de Class et sélectionner du texte par le DOM
// console.log(document.querySelector('.message').textContent);
// // Changer le texte de cet élément en manipulant le DOM
// document.querySelector('.message').textContent = 'Correct Number!';
// document.body.style.backgroundColor = 'green' est équivalent à > document.querySelector('body).style.backgroundColor = 'green';
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = secretNumber;
//console.log('nombre :', secretNumber, typeof secretNumber);

let score = 10;
let highScore = '';
let countTour = 4;

//Fonctions pour alléger mon code (dry code)
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const checkNumber = Number(document.querySelector('.guess').value);
  //console.log(checkNumber);

  // Si le checkNumber n'est pas renseigné et le btn activé
  if (!checkNumber) {
    //document.querySelector('.message').textContent =
    displayMessage('🔔 Unvalid value, try again'); // Dry code avec fonction
  }
  // Si le checkNumber est strictement équivalent à secretNumber (gagnant)
  else if (checkNumber === secretNumber) {
    //document.querySelector('.message').textContent =
    displayMessage('Great job, you find it !');
    // Itération et Mémoire du highscore après reload btn-again
    if (score > highScore) {
      //condition
      highScore = score; //résultat
      document.querySelector('.highscore').value = score; //valeur
      document.querySelector('.highscore').textContent = score; //affichage
      document.querySelector('.highscore').style.color = 'red'; //style rouge
    }
    document.body.style.backgroundColor = 'green'; //OU document.querySelector('body).style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.number').textContent =
    displayNumber(`🥇${secretNumber}👑`);
  }
  //Si le checkNumber est différent du secretNumber
  else if (checkNumber !== secretNumber) {
    if (score > 1) {
      // L'opérateur ternaire agit comme un booléan et permet de s'affranchir d'une
      //partie de code redondante (comme la condition en commentaire suivante,
      //incluse ici)
      //document.querySelector('.message').textContent =
      displayMessage(
        checkNumber < secretNumber
          ? `Too low, ${countTour} tour(s) left !` // option 1
          : `Too high, ${countTour} tour(s) left !`
      ); // option 2
      score -= 2;
      countTour--;
      //document?querySelector('.score').textContent =
      displayScore(`${score}`);
    } //Si le score est autre que > 1 et se termine = GAME OVER !
    else {
      //document.querySelector('.message').textContent =
      displayMessage('Game over !');
      //document.querySelector('.score').textContent =
      displayScore('0');
    }
    //If the number is below the secret number
    // } else if (checkNumber > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(
    //       '.message'
    //     ).textContent = `Too high, ${countTour} tour(s) left !`;
    //     score -= 2;
    //     countTour--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'Game over !';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
  //console.log(document.querySelector('.guess').value);
});

// Reload de la page et remise à zero avec btn-again
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  countTour = 4;
  //document.querySelector('.score').textContent =
  displayScore(10);
  //document.querySelector('.number').textContent =
  displayNumber('?');
  //document.querySelector('.message').textContent =
  displayMessage('Guess my number ...');
  document.body.style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

// To restart the game without refreshing the page: css btn-Again
//document.querySelector('.again').addEventListener('click', function () {
//value = window.location.reload(false);
//});
