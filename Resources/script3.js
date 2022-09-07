var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendStart = document.getElementById("button-start");
var appendStop = document.getElementById("button-stop");
var appendReset = document.getElementById("button-reset");
var interval; // to store timer values

//this function will run when click on start
function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "o" + seconds;
    tens = 0;
    appendTens.innerHTML = "o" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
buttonStart.onclick = function() {
  interval = setInterval(startTimer);
};
buttonStop.onclick = function() {
  clearInterval(interval);
};
buttonReset.onclick = function() {
  clearInterval(interval);
  seconds = "o";
  tens = "o";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
};