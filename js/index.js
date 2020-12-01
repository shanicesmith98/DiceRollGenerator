'use strict';

function rollDice() {
    let min, max, randFormula;

    if (document.getElementById("decimal").checked === false) {
        min = parseInt(document.getElementById("min").value);
        max = parseInt(document.getElementById("max").value);
        randFormula = Math.floor(randomizer(min, max));
    }
    
    if (document.getElementById("decimal").checked === true)  {
        min = parseFloat(document.getElementById("min").value);
        max = parseFloat(document.getElementById("max").value);
        randFormula = randomizer(min, max);
    }

    let response = validateInput(min, max, randFormula);
        
    document.getElementById("result").innerHTML = response;
}

function validateInput(min, max, num) {
    let output = "";

    if (isNaN(min) || isNaN(max)) {
        output = `Input should be a number!`;
    } else if (min >= max) {
        output = `Invalid Input, please update your values!`;
    } else if (min < 0 || max < 0) {
        output = `Input cannot be a negative value!`;
    } else {
        output = `Your dice rolled ... <br> ${num}`;
    }

    return output;
}

function randomizer (min, max) {
    const randomNum = Math.random() * (max - min + 1) + min;

    return randomNum;
}