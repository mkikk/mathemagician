import "performance";

let num1;
let num2;
let correctAnswer;
let round = 1;

let start;
let finish;
let time;

document.body.innerHTML = '<h1>Addition to be added</h1>';
function startGame() {
       start = performance.now();
       newNum()
}
function newNum() {
    let num1 = round(Math.random() * 10);
    let num2 = round(Math.random() * 10);
    let correctAnswer = sum(num1,num2);
    document.getElementById("firstNum").innerHTML = num1;
    document.getElementById("secondNum").innerHTML = num2;
}

function checkAnswer() {
    let answer = document.getElementById('answer').value;
    if (answer == correctAnswer) {
        newNum();
        round += 1;
        if (round == 3) {
            finish = performance.now();
            time = finish-start;
            document.getElementById("timeTaken").innerHTML = "Congratulations! You completed the game in ${time} milliseconds! "
        }
    }
}