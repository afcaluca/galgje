let guessword = [];


  
  

const words = ["Nathan", "Rida", "Nicole", "Hidde", "Luca", "Ozan", "Marnix",];

const randomWord = words[Math.floor(Math.random() * words.length)];

const guessedLetters = [];

let watjeookwilt = document.getElementById("watjeookwilt");

watjeookwilt.innerHTML = "_ ".repeat(randomWord.length);

let goeie = [];
let slecht = [];

const watvoornaamook = document.getElementById("guess-input");

for(let i = 0; i < randomWord.length; i++) {
    guessword.push(randomWord.split[i]);
  }

function guessLetter() {

console.log(randomWord);
    guessedLetters.push(watvoornaamook.value);
    console.log(guessedLetters);

    if (randomWord.includes(watvoornaamook.value)) {
        goeie.push(watvoornaamook.value);
        console.log(goeie);
    } else {
        slecht.push(watvoornaamook.value);
        console.log(slecht);
    }

        if (goeie.length === randomWord.length) {
            alert("Je hebt gewonnen!");
        }
        
        if (slecht.length === 6) {
            alert("Je hebt verloren!");
        }

        watjeookwilt.innerHTML = "The word: " + randomWord.split('').map(function (letter) {
            if (goeie.includes(letter)) {
                return letter;
            } else {
                return "_ ";
            }
        }).join('');
    } 




   


