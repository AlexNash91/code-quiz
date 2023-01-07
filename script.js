// variables block
var time = document.querySelector(".time")
var main = document.querySelector("main")
var secondsLeft = 60
var start = document.querySelector('#start')
// function to start game and maybe switch questions?
function startTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = "Time:" + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            main.textContent = "You Lose"
        }

    }, 60000);
}

// function to test event listener
function printTrue() {
    console.log("True")
    console.log(secondsLeft)
}

start.addEventListener('click', startTime)

// will move arrays into functions after timer fix 
const questions = ["Commonly used data types DO NOT include:", "Arrays in JavaScript can be use to store:", "What symbol must JavaScript functions be wrapped in?"]
const ans1 = ["1. Strings", "2. Integers", "3. alerts", "4. Booleans"]
const ans2 = ["1. Numbers and strings", "Other arrays", "Booleans", "All of the above"]
const ans3 = ["1. ()", "2. !", "3. {}", "4.''"]