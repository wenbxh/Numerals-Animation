"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = ["0010100", "1011011", "1010111", "0110110", "1100111", "1101111", "1010100","1111111", "1110111", "1111101"];
var elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;



function binaryAdd(a, b) {
    while (b != 0) {
        var c = (a ^ b);
        b = ((a & b) << 1);
        a = c;
    }

    return a;
};

window.onload = function() {
    stepSequence();
};

function main() {
    console.log(createAllCombinationOfSevenSegement());
}