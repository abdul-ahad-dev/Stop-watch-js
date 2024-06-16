// get elements of (Stop, Pause, Start, Reset) Buttons
document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('end-btn').addEventListener('click', endStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);

// Declare variables of hour, minute, second, millisecond, timer, running
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer
let running = false;


// Get elements of Hours, Minutes, Second display
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');


// Get elements of watch Hours, Minutes, Second display
let watch_second = document.getElementById('watch_second')
let watch_mint = document.getElementById('watch_mint')
let watch_hour = document.getElementById('watch_hour')


// Start stopwatch function
function startStopwatch() {
    // If already running, do nothing
    if (running) return;
    running = true;
    
    let btnsContainer = document.getElementById('button-container');
    let s_btn = document.getElementById('start-btn');

    btnsContainer.style.display = 'flex';
    s_btn.style.display = 'none';

    document.getElementById('holder').style.display = 'none';
    document.getElementById('time').style.margin = "50% 0 0 0";

    // Start interval timer
    timer = setInterval(() => {

        // Increment milliseconds and update hours, minutes, seconds accordingly
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

        // Update display
        updateDisplay()
    }, 10);
}


var pauseBtn = document.getElementById('pause-btn')

// Pause stopwatch function
function pauseStopwatch() {
    if (running) {
        // Pause stopwatch and update pause button text
        pauseBtn.textContent = 'Start'
        running = false;
        clearInterval(timer);
    } else { 
        // Resume stopwatch and update pause button text
        pauseBtn.textContent = 'Pause'
        startStopwatch()
        running = true;
    }
}


// End stopwatch function
function endStopwatch() {
    // Pause stopwatch and reset time
    pauseBtn.textContent = 'Start'
    clearInterval(timer);
    running = false;
    resetTime();
    updateDisplay();
}

// Reset stopwatch function
function resetStopwatch() {
    // Clear interval timer and reset time
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

// Reset time function
function resetTime() {
    // Reset hours, minutes, seconds, and milliseconds to 0
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
}

// Update display function
function updateDisplay() {
    // Update watch display with current time
    watch_hour.innerHTML = String(hours).padStart(2, '0');
    watch_mint.innerHTML = String(minutes).padStart(2, '0');
    watch_second.innerHTML = String(seconds).padStart(2, '0');
}
