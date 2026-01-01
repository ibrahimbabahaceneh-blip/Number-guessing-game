const resultmessage = document.getElementById("result");
let randNum = Math.floor(Math.random() * 100 + 1);

let result = false;
console.log(randNum);
let hint = document.getElementById("hint");
let count = 0;
let countH = document.getElementById("count");
const Submitbtn = document.getElementById("Submitbtn");

let guess;


Submitbtn.onclick = function(){
    guess = document.getElementById("guess").value;
    guess = Number(guess);
    if(guess == randNum){
        count++;
        resultmessage.textContent = `YOU WON!!!`;
        result = true;
        countH.textContent = `You did it in ${count} time/s`;
        Submitbtn.disabled = true;
        hint.textContent = `finaly`;
    }else if(guess > randNum){
        resultmessage.textContent = `Wrong :(`;
        hint.textContent = `Too high`;
        count++;
        countH.textContent = `You tried ${count} time/s`;
    }else{
        resultmessage.textContent = `Wrong :(`;
        hint.textContent = `Too low`;
        count++;
        countH.textContent = `You tried ${count} time/s`;
    }
}
