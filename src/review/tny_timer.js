"use strict";

/*
    New Perspectives on HTML5 and CSS3, 7th Edition
    Tutorial 9
    Review Assignment

    Event Timer
    Author: Matthew Mousseau
    Date:   10/26/2022

*/

function main() {
    setInterval("showClock()", 1000);
}

function showClock() {
    const thisDay = new Date();
    const localDate = thisDay.toLocaleDateString();
    const localTime = thisDay.toLocaleTimeString();

    const currentTime = document.getElementById("currentTime");
    currentTime.innerHTML = `<span>${localDate}</span><span>${localTime}</span>`;

    const j4Date = nextJuly4(thisDay);
    j4Date.setHours(21);

    let timeLeft = Math.floor((j4Date - thisDay) / 1000);

    const SECS_PER_DAY = 86400;
    const SECS_PER_HOUR = 3600;
    const SECS_PER_MIN = 60;

    const days = Math.floor(timeLeft / SECS_PER_DAY);
    timeLeft -= days * SECS_PER_DAY;
    const hours = Math.floor(timeLeft / SECS_PER_HOUR);
    timeLeft -= hours * SECS_PER_HOUR;
    const mins = Math.floor(timeLeft / SECS_PER_MIN);
    timeLeft -= mins * SECS_PER_MIN;
    const secs = timeLeft;

    document.getElementById('dLeft').innerText = days;
    document.getElementById('hLeft').innerText = hours;
    document.getElementById('mLeft').innerText = mins;
    document.getElementById('sLeft').innerText = secs;
}

function nextJuly4(currentDate) {
    var cYear = currentDate.getFullYear();
    var jDate = new Date("July 4, 2018");
    jDate.setFullYear(cYear);
    if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
    return jDate;
}

main();
