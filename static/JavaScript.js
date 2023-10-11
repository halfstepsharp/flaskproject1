import Chart from '../node_modules/chart.js/auto';

var elapsedTime = 0;
const TIMENOW = Date.now();
const TIMESTAMP_FIELD = document.getElementById('SignalGraph');

function updateTime() {
    elapsedTime = Date.now() - TIMENOW;
    TIMESTAMP_FIELD.textContent = formatTimestamp(elapsedTime);
}

function formatTimestamp(milliseconds) {
    // take a number of milliseconds and convert it to a timestamp, which will be returned as a string
    const totalseconds = Math.floor(milliseconds / 1000)
    const hours = String(Math.floor(totalseconds / 60 / 60)).padStart(2, '0')
    const mins = String(Math.floor((totalseconds - (hours * 60 * 60)) / 60)).padStart(2, '0')
    const secs = String(Math.floor(totalseconds - (hours * 60 * 60 + mins * 60))).padStart(2, '0')
    const timestring = `${hours}:${mins}:${secs}`
    return timestring
}

window.onload = function () {
    setInterval(updateTime, 1000);
}