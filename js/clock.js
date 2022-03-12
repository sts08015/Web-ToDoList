const clock = document.querySelector("h2#clock");

function pad(num) {
    return String(num).padStart(2, "0");
}

function getClock() {
    const date = new Date();
    const hours = pad(date.getHours());
    const mins = pad(date.getMinutes());
    const secs = pad(date.getSeconds());
    clock.innerText = (`${hours}:${mins}:${secs}`);
}

getClock();
setInterval(getClock, 1000);