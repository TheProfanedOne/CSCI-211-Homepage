"use strict";

/*
    New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
    Tutorial 12
    Case Problem 1

    Author: Matthew Mousseau
    Date:   11/17/2022

    Filename: na_styler.js

    Functions
    =========
    
    setStyles()
        Sets up the style sheets and the style sheet switcher.
        
    randInt(size)
        Returns a random integer from 0 up to size-1.

*/

window.addEventListener("load", setStyles);

function setStyles() {
    const styleNum = randInt(5);

    const fancySheet = document.createElement('link');
    fancySheet.setAttribute('rel', 'stylesheet');
    fancySheet.setAttribute('id', 'fancySheet');
    fancySheet.setAttribute('href', `na_style_${styleNum}.css`);
    document.head.appendChild(fancySheet);

    const figBox = document.createElement('figure');
    figBox.setAttribute('id', 'styleThumbs');
    document.getElementById('box').appendChild(figBox);

    for (let i = 0; i < 5; i++) {
        const sheetImg = document.createElement('img');
        sheetImg.setAttribute('src', `na_small_${i}.png`);
        sheetImg.setAttribute('alt', `na_style_${i}.css`);
        sheetImg.addEventListener('click', evt => {
            fancySheet.setAttribute('href', evt.target.getAttribute('alt'));
        });
        figBox.appendChild(sheetImg);
    }

    const thumbStyles = document.createElement('style');
    document.head.appendChild(thumbStyles);

    thumbStyles.sheet.insertRule("\
        figure#styleThumbs {\
            position: absolute;\
            left: 0px;\
            bottom: 0px;\
        }\
    ");

    thumbStyles.sheet.insertRule("\
        figure#styleThumbs img {\
            outline: 1px solid black;\
            cursor: pointer;\
            opacity: 0.75;\
        }\
    ");

    thumbStyles.sheet.insertRule("\
        figure#styleThumbs img:hover {\
            outline: 1px solid red;\
            opacity: 1.0;\
        }\
    ");
}

function randInt(size) {
    return Math.floor(size*Math.random());
}