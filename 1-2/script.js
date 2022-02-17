'use strict';
const op1 = +prompt('число1', '');
const op2 = +prompt('число2', '');

function add() {
    return console.log(`сумма ${op1 + op2}`);

}

function sub() {
    return console.log(`вычетание ${op1 - op2}`);

}

function mult() {
    return console.log(`умножение ${op1 * op2}`);

}

function div() {
    return console.log(`деление ${op1 / op2}`);

}

add();
sub();
mult();
div();