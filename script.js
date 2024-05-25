document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('end-btn').addEventListener('click', endStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);




let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer
let running = false;

const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');



let watch_second = document.getElementById('watch_second')
let watch_mint = document.getElementById('watch_mint')
let watch_hour = document.getElementById('watch_hour')



function startStopwatch() {
    if (running) return;
    running = true;

    console.log("Starting stopwatch...");

    let btnsContainer = document.getElementById('button-container');
    let s_btn = document.getElementById('start-btn');

    btnsContainer.style.display = 'flex';
    s_btn.style.display = 'none';

    document.getElementById('holder').style.display = 'none';
    document.getElementById('time').style.margin = "50% 0 0 0";

    timer = setInterval(() => {
        console.log("Interval function called...");

        milliseconds += 10;

        if (milliseconds >= 1000) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }

        console.log("Time: ", hours, minutes, seconds, milliseconds);
        // Update display
        updateDisplay()
    }, 10);
}


function pauseStopwatch() {
    if (running) {
        running = false;
        clearInterval(timer);
        
    } else {
        
        startStopwatch()
        running = true;
    }
}



function endStopwatch() {
    clearInterval(timer);
    running = false;
    resetTime();
    updateDisplay();
}


function resetStopwatch() {
    clearInterval(timer);
    running = false;
    resetTime();
    updateDisplay();


    let btnsContainer = document.getElementById('button-container');
    let s_btn = document.getElementById('start-btn')

    btnsContainer.style.display = 'none';
    s_btn.style.display = 'inline-block'

    document.getElementById('holder').style.display = 'block'
    document.getElementById('time').style.margin = "0"

}

function resetTime() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
}

function updateDisplay() {
    watch_hour.innerHTML = String(hours).padStart(2, '0');
    watch_mint.innerHTML = String(minutes).padStart(2, '0');
    watch_second.innerHTML = String(seconds).padStart(2, '0');
}
