var time = document.querySelector(".time")
var main = document.querySelector("main")
var secondsLeft = 60
var start = document.querySelector('#start')

function startTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = "Time:" + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            

        }

    }, 60000);
}

function startGame() {
    startTime()


}

function printTrue() {
    console.log("True")
}

start.addEventListener('click', startGame)