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