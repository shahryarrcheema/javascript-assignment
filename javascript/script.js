
document.getElementById("clearInputBtn").onclick = function () {
    document.getElementById("input-box").innerHTML = " "
}

document.getElementById("clearOutputBtn").onclick = function () {
    document.getElementById("output-box").innerHTML = " "
}


// alert Name 
document.getElementById("alertName").onclick = function () {
    let userName = "shahryar cheema"
    alert(userName)
    document.getElementById("output-box").innerHTML = " ";
    document.getElementById("input-box").innerHTML = userName ;
}

// alert Number 
document.getElementById("alertNumber").onclick = function () {
    let number = 100
    alert(number)
    document.getElementById("output-box").innerHTML = " ";
    document.getElementById("input-box").innerHTML = number
}

// show variables 
document.getElementById("variableNames").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    document.getElementById("output-box").innerHTML = "<ul class='text-start'><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>"
}

// show camelCase 
document.getElementById("camelCase").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    document.getElementById("output-box").innerHTML = "weAreLearningJavaScript"
}

let num1 = 7; 
let num2 = 3;

// Sum 2 Numbers

document.getElementById("sumNumbers").onclick = function(){
   
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " + " + num2 ;
    document.getElementById("output-box").innerHTML = num1 + num2 ;
}


// Subtract 2 Numbers

document.getElementById("subtractNumbers").onclick = function(){
   
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " - " + num2 ;
    document.getElementById("output-box").innerHTML = num1 - num2 ;
}

// Multiply 2 Numbers

document.getElementById("multiplyNumbers").onclick = function(){
   
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " X " + num2 ;
    document.getElementById("output-box").innerHTML = num1 * num2 ;
}

// Divide 2 Numbers

document.getElementById("divideNumbers").onclick = function(){
   
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " / " + num2 ;
    let output  = num1 / num2 ;
    document.getElementById("output-box").innerHTML = output.toFixed("2")
}

// Calculate Some Numbers 

document.getElementById("calculateNumbers").onclick = function(){
    let statement = 15 / 3 + 23 * 4 - (3 + 6)
    document.getElementById("input-box").innerHTML = "let Statement = 15 / 3 + 23 * 4 - (3 + 6)" ;
    document.getElementById("output-box").innerHTML = statement ;
}