"use strict";;
/*
    New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
    Tutorial 12
    Review Assignment

    Author: Matthew Mousseau
    Date:   11/17/2022

    Filename: bc_keys.js

    Functions
    =========
    
    findKeyWords()
        Locate the keywords in the article indicated by the <dfn> tag
        and add those keywords in alphabetical order to a keyword box.
        
    makeKeyStyles()
        Create an embedded style sheet for the keyword box.

        
    replaceWS(textStr)
        Replaces occurences of one or more consecutive white space
        characters with the _ character.

*/

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
    const aside = document.createElement('aside');
    aside.setAttribute("id", "keywords");

    const heading = document.createElement('H1');
    heading.innerText = 'Keyword List';
    aside.appendChild(heading);

    const ordered = document.createElement('ol');
    aside.appendChild(ordered);

    const keyWordElems = document.querySelectorAll('dfn');
    const keyWords = new Array(keyWordElems.length);

    for (let i = 0; i < keyWordElems.length; i++) {
        const elem = keyWordElems[i];
        keyWords[i] = elem.innerText;
        const linkID = replaceWS(keyWords[i]);
        elem.setAttribute('id', `keyword_${linkID}`);
    }

    keyWords.sort();

    keyWords.forEach(word => {
        const keyWordListItem = document.createElement('li');
        const keyWordLink = document.createElement('a');
        keyWordLink.innerHTML = word;

        const linkID = replaceWS(word);
        keyWordLink.setAttribute('href', `#keyword_${linkID}`);

        keyWordListItem.appendChild(keyWordLink);
        ordered.appendChild(keyWordListItem);
    });

    document.getElementById('doc').insertAdjacentElement("afterbegin", aside);
}

function makeKeyStyles() {
    document.head.appendChild(document.createElement('style'));
    const sheet = document.styleSheets[document.styleSheets.length - 1];

    sheet.insertRule("\
        aside#keywords {\
            border: 3px solid rgb(101, 101, 101);\
            float: right;\
            margin: 20px 0px 20px 20px;\
            padding: 10px;\
            width: 320px;\
        }\
    ");

    sheet.insertRule("\
        aside#keywords h1 {\
            font-size: 2em;\
            margin: 5px;\
            text-align: center;\
        }\
    ");

    sheet.insertRule("\
        aside#keywords ol {\
            margin-left: 20px;\
            font-size: 1.2em;\
        }\
    ");

    sheet.insertRule("\
        aside#keywords ol li {\
            line-height: 1.5em;\
        }\
    ");

    sheet.insertRule("\
        aside#keywords ol li a {\
            color: rgb(101, 101, 101);\
            text-decoration: none;\
        }\
    ");
}

/* Supplied Functions */

function replaceWS(textStr) {
    var revText = textStr.replace(/\s+/g,"_");
    return revText;
}
