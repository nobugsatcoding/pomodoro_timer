const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');
const resetElement = document.getElementById('reset');
const timerElement = document.getElementById('timer');

let interval;
let timeLeft = 600;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    timerElement.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft < 0) {
            alert("Time's up!");
            timeLeft = 600;
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 600;
    updateTimer();
}

startElement.addEventListener('click', startTimer)
stopElement.addEventListener('click', stopTimer)
resetElement.addEventListener('click', resetTimer)

