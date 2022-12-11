"use strict";

/*
    New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
    Tutorial 13
    Tutorial Case

    Payment Form Script
    
    Author: Matthew Mousseau
    Date:   12/05/2022
    
    Filename: co_payment.js
    
    Function List
    =============
    
    runSubmit()
        Runs validation tests when the submit button is clicked
        
    validateCVC()
        Validates the credit card CVC number
        
    validateMonth()
        Validates that the user has selected the expiration month of the credit card
        
    validateYear()
        Validates that the user has selected the expiration year of the credit card
        
    validateNumber()
        Validates that the user has entered a valid and legitimate card number
        
    validateCredit()
        Validates that the user has selected a credit card type
        
    validateName()
        Validates that the user has specified the name on the credit card
        
    sumDigits(numStr)
        Sums the digits characters in a text string
        
    luhn(idNum)
        Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", _ => {
    // Retrieve the field/value pairs from the url
    const formFields = decodeURIComponent(
        location.search.slice(1).replace(/\+/g, " ")
    ).split(/[&=]/g);

    // Write the field values to the order form
    const oElements = document.forms.namedItem("order").elements;
    oElements.namedItem("orderDate").value      = formFields[1];
    oElements.namedItem("modelName").value      = formFields[5];
    oElements.namedItem("qty").value            = formFields[7];
    oElements.namedItem("initialCost").value    = formFields[9];
    oElements.namedItem("protectionName").value = formFields[13];
    oElements.namedItem("protectionCost").value = formFields[15];
    oElements.namedItem("subtotal").value       = formFields[17];
    oElements.namedItem("salesTax").value       = formFields[19];
    oElements.namedItem("totalCost").value      = formFields[21];
});

window.addEventListener("load", _ => {
    document.getElementById("subButton").onclick = runSubmit;
    document.getElementById("cardName").oninput = validateName;
    document.getElementById("cardNumber").oninput = validateNumber;
    document.getElementById("expMonth").onchange = validateMonth;
    document.getElementById("expYear").onchange = validateYear;
    document.getElementById("cvc").oninput = validateCVC;
});

function runSubmit() {
    validateName();
    validateCredit();
    validateNumber();
    validateMonth();
    validateYear();
    validateCVC();
}

function validateName() {
    const cardName = document.getElementById("cardName");
    if (cardName.validity.valueMissing) {
        cardName.setCustomValidity("Enter your name as it appears on the card");
    } else {
        cardName.setCustomValidity("");
    }
}

function validateCredit() {
    const creditCard = document.forms.payment.elements.credit[0];
    if (creditCard.validity.valueMissing) {
        creditCard.setCustomValidity("Select your credit card");
    } else {
        creditCard.setCustomValidity("");
    }
}

function validateNumber() {
    const cardNumber = document.getElementById("cardNumber");
    if (cardNumber.validity.valueMissing) {
        cardNumber.setCustomValidity("Enter your card number");
    } else if (cardNumber.validity.patternMismatch) {
        cardNumber.setCustomValidity("Enter a valid card number");
    } else if (!luhn(cardNumber.value)) {
        cardNumber.setCustomValidity("Enter a legitimate card number");
    } else {
        cardNumber.setCustomValidity("");
    }
}

function validateMonth() {
    const cardMonth = document.getElementById("expMonth");
    if (cardMonth.selectedIndex === 0) {
        cardMonth.setCustomValidity("Select the expiration month");
    } else {
        cardMonth.setCustomValidity("");
    }
}

function validateYear() {
    const cardYear = document.getElementById("expYear");
    if (cardYear.selectedIndex === 0) {
        cardYear.setCustomValidity("Select the expiration year");
    } else {
        cardYear.setCustomValidity("");
    }
}

function validateCVC() {
    const cardCVC = document.getElementById("cvc");
    const creditCard = document.querySelector('input[name="credit"]:checked').value;

    if (cardCVC.validity.valueMissing) {
        cardCVC.setCustomValidity("Enter your CVC number");
    } else if ((creditCard === "amex") && !(/^\d{4}$/.test(cardCVC.value))) {
        cardCVC.setCustomValidity("Enter a 4-digit CVC number");
    } else if ((creditCard !== "amex") && !(/^\d{3}$/.test(cardCVC.value))) {
        cardCVC.setCustomValidity("Enter a 3-digit CVC number");
    } else {
        cardCVC.setCustomValidity("");
    }
}

function sumDigits(numStr) {
    let digitTotal = 0;
    for (let i = 0; i < numStr.length; i++) {
        digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
}

function luhn(idNum) {
    let string1 = "";
    let string2 = "";

    // Retrieve the odd-numbered digits
    for (let i = idNum.length - 1; i >= 0; i -= 2) {
        string1 += idNum.charAt(i);
    }

    // Retrieve the even-numbered digits and double them
    for (let i = idNum.length  -2; i >= 0; i -= 2) {
        string2 += 2 * idNum.charAt(i);
    }

    // Return whether the sum of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;
}
