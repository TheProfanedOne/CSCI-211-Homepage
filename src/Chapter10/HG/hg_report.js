"use strict";

/*
    New Perspectives on HTML5 and CSS3, 7th Edition
    Tutorial 10
    Case Problem 2

    Author: Matthew Mousseau
    Date:   11/02/2022
    
    Filename: hg_report.js
	
*/

function main() {
    document.getElementsByTagName('article').item(0).innerHTML =
        `<h1>${itemTitle}</h1>` +
        `<h2>By: ${itemManufacturer}</h2>` +
        `<img src="hg_${itemID}.png" alt="${itemID}" id="gameImg" />` +
        '<table>' +
            `<tr><th>Product ID</th><td>${itemID}</td></tr>` +
            `<tr><th>List Price</th><td>${itemPrice}</td></tr>` +
            `<tr><th>Platform</th><td>${itemPlatform}</td></tr>` +
            `<tr><th>ESRB Rating</th><td>${itemESRB}</td></tr>` +
            `<tr><th>Condition</th><td>${itemCondition}</td></tr>` +
            `<tr><th>Release</th><td>${itemRelease}</td></tr>` +
        '</table>' +
        `${itemSummary}`;

    var ratingsSum = 0;
    const ratingsCount = ratings.length;
    for (let i = 0; i < ratingsCount; i++) {
        ratingsSum += ratings[i];
    }
    const ratingsAvg = ratingsSum / ratingsCount;

    var ratingReport =
        '<h1>Customer Reviews</h1>' +
        `<h2> ${ratingsAvg} out of 5 stars (${ratingsCount} reviews)</h2>`;

    for (let i = 0; i < 3; i++) {
        ratingReport +=
            '<div class="review">' +
                `<h1>${ratingTitles[i]}</h1>` +
                '<table>' +
                    `<tr><th>By</th><td>${ratingAuthors[i]}</td></tr>` +
                    `<tr><th>Review Date</th><td>${ratingDates[i]}</td></tr>` +
                    '<tr><th>Rating</th><td>';

        for (let j = 0; j < ratings[i]; j++) ratingReport += '<img src="hg_star.png" />';

        ratingReport +=
                    '</td></tr>' +
                '</table>' +
                `${ratingSummaries[i]}` +
            '</div>';
    }
    document.getElementsByTagName('aside').item(0).innerHTML = ratingReport;
}

main();
