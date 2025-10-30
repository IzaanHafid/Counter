
const input_startingValue = document.getElementById('input_startingValue');
const input_smallerIncrement = document.getElementById('input_smallerIncrement');
const input_largerIncrement = document.getElementById('input_largerIncrement');

const submit = document.getElementById('submit_button');

const error = document.getElementById('error');

const count = document.getElementById('count');

const negateb = document.getElementById('negateb');
const negatea = document.getElementById('negatea');
const adda = document.getElementById('adda');
const addb = document.getElementById('addb');
const reset = document.getElementById('reset');


let startingValue, smallerIncrement, largerIncrement;

submit.onclick = function() {

    startingValue = input_startingValue.value;
    smallerIncrement = input_smallerIncrement.value;
    largerIncrement = input_largerIncrement.value;

    if (smallerIncrement <= 0 || largerIncrement <= 0) {
        error.textContent = 'Increments cannot be less than or equal to 0';
        return;
    }

    else 
        error.textContent = '';

    count.textContent = startingValue;
    adda.textContent = `+${smallerIncrement}`;
    addb.textContent = `+${largerIncrement}`;
    negatea.textContent = `-${smallerIncrement}`;
    negateb.textContent = `-${largerIncrement}`;
    
}

reset.onclick = function() {count.textContent = startingValue}

negateb.onclick = function() {count.textContent = parseFloat(count.textContent) - parseFloat(largerIncrement)}
negatea.onclick = function() {count.textContent = parseFloat(count.textContent) - parseFloat(smallerIncrement)}
adda.onclick = function() {count.textContent = parseFloat(count.textContent) + parseFloat(smallerIncrement)}
addb.onclick = function() {count.textContent = parseFloat(count.textContent) + parseFloat(largerIncrement)}
