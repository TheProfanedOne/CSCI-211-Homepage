"use strict";

/*
    New Perspectives on HTML5 and CSS3, 7th Edition
    Tutorial 10
    Review Assignment

    Author: Matthew Mousseau
    Date:   11/02/2022

	Filename: lht_table.js

*/

function main() {
    const eventList = document.getElementById('eventList');

    const thisDay = new Date('August 30, 2018');

    var tableHTML =
        '<table id="eventTable">' +
            '<caption>Upcoming Events</caption>' +
            '<tr><th>Date</th><th>Event</th><th>Price</th></tr>';

    const endDate = new Date();
    endDate.setTime(thisDay.getTime() + 14*24*60*60*1000);

    for (var i = 0; i < eventDates.length; i++) {
        const eventDate = new Date(eventDates[i]);
        const eventDay = eventDate.toDateString();
        const eventTime = eventDate.toLocaleTimeString();

        if (thisDay <= eventDate && eventDate <= endDate) {
            tableHTML +=
                    '<tr>' +
                        `<td>${eventDay} @ ${eventTime}</td>` +
                        `<td>${eventDescriptions[i]}</td>` +
                        `<td>${eventPrices[i]}</td>` +
                    '</tr>';
        }
    }

    tableHTML +=
        '</table>';

    eventList.innerHTML = tableHTML;
}

main();
