'use strict';
let op1 = +prompt('число1', '');
let op2 = +prompt('число2', '');

function add() {
    let action = op1 + op2
    return console.log(`сумма ${action}`);

}

function sub() {
    let action = op1 - op2
    return console.log(`вычетание ${action}`);

}

function mult() {
    let action = op1 * op2
    return console.log(`умножение ${action}`);

}

function div() {
    let action = op1 / op2
    return console.log(`деление ${action}`);

}

add();
sub();
mult();
div();