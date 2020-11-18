function randomDice() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    
    const randFormula = Math.floor(Math.random() * max) + min;
    
    document.getElementById("result").innerHTML = "Your dice rolled: " + randFormula;
}