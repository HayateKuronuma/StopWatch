
let milliseconds;
let sec10;
let seconds;
let minutes;
let hours;
let gmt;
let timerInterval;
let diff = 0;
let startTime;
let nowTime;
let addTime = 0;
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const time = document.getElementById("time");

function pushStart(){
  timerInterval = setInterval(runStopWatch, 10);
  start.disabled = "true";
  stop.disabled = "";
  reset.disabled = "";
  startTime = Date.now();
}

function pushStop(){
  clearInterval(timerInterval);
  addTime += Date.now() - startTime;
  start.disabled = "";
  stop.disabled = "true";
  reset.disabled = "";
  drawTime();
}

function pushReset(){
  clearInterval(timerInterval);
  addTime = 0;
  milliseconds = sec10 = seconds = minutes = hours = 0;
  start.disabled = "";
  stop.disabled = "true";
  reset.disabled = "true";
  time.innerHTML = "0:0:0:0";
}

function runStopWatch(){
  nowTime = Date.now();
  gmt = new Date().getTimezoneOffset() / 60;
  diff = new Date(nowTime - startTime + addTime);
  milliseconds = diff.getMilliseconds();
  sec10 = Math.floor(milliseconds / 100);
  seconds = diff.getSeconds();
  minutes = diff.getMinutes();
  hours = diff.getHours() + gmt;
  drawTime();
}

function drawTime(){
 time.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + sec10;
}



