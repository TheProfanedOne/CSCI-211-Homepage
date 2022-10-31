"use strict";

/*
    New Perspectives on HTML5 and CSS3, 7th Edition
    Tutorial 9
    Case Problem 1

    Planisphere Script
    Author: Matthew Mousseau
    Date:   10/26/2022

*/

function main() {
    const thisTime = new Date();
    const timeStr = thisTime.toLocaleString();

    document.getElementById('timeStamp').innerHTML = timeStr;

    const thisHour = thisTime.getHours();
    const thisMonth = thisTime.getMonth();
    const mapNum = (2*thisMonth + thisHour) % 24;

    const imgStr = `<img src="sd_sky${mapNum}.png">`;

    const planisphere = document.getElementById('planisphere');
    planisphere.insertAdjacentHTML("afterbegin", imgStr);
}

main();
