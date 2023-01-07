var time = document.querySelector(".time")
var main = document.querySelector("main")
var secondsLeft = 60
var start = document.querySelector(".btnDiv")

function setTime() {
    var timerInterval = setinterval(function() {
        secondsLeft--;
        time.textContent = "Time:" + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            

        }

    }, 60000);
}

function startGame() {
    

}

start.addEventListener('click', startGame)