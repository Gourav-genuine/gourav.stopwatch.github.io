
let stopwatchInterval;
let tenMilliSeconds = 0;
let seconds = 0;
let running = false;

// Start the watch and increase time in every ten millisecond
function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(function() {
      tenMilliSeconds++;
      updateStopwatch();
    }, 10);
  }
}

// Stop the watch
function stopStopwatch() {
  clearInterval(stopwatchInterval);
      stopwatchInterval = null;
}

// Update the timer view every ten millisecond
function updateStopwatch() {
  const seconds = Math.floor(tenMilliSeconds / 100);
  const remainderSeconds = seconds % 60
  const minutes = Math.floor(tenMilliSeconds / 6000);
  const remainderMilliSeconds = tenMilliSeconds % 100
  document.getElementById('viewing_area').innerText = `${minutes}:${remainderSeconds}:${remainderMilliSeconds}`;
}

// Reset stopwatch
function resetStopwatch() {
  stopStopwatch();
  tenMilliSeconds = 0;
  updateStopwatch();
  running = false;
  startStopButtonElement.innerText="Start";
}

let startStopButtonElement = document.getElementById("start_stop");
let resetButtonElement = document.getElementById("reset_button");

// Event listener for start, stop and reset buttons
startStopButtonElement.addEventListener('click',() => {
  if (running) {
    stopStopwatch();
    startStopButtonElement.innerText="Start";
    running = false;
  } else {
    startStopwatch();
    startStopButtonElement.innerText="Stop";
    running = true;
  }

  resetButtonElement.addEventListener('click', resetStopwatch)
  
})
