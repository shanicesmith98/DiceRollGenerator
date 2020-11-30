'use strict';

function rollDice() {
    let output = "Enter your dice range!";
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    const randFormula = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(min) || isNaN(max)) {
        output = `Input should be a number!`;
    } else if (min >= max) {
        output = `Invalid Input, please update your values!`;
    } else if (min < 0 || max < 0) {
        output = `Input cannot be a negative value!`;
    } else {
        output = `Your dice rolled: ${randFormula}`;
    }
        
    document.getElementById("result").innerHTML = output;
}