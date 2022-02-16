'use strict';
let op1 = +prompt('число1', '');
let operation = prompt('Выбери действие +, -, *, /', '');
let op2 = +prompt('число2', '');
console.log(operation);

function add() {
    return console.log(`сумма ${op1 + op2}`);

};

function sub() {
    return console.log(`вычетание ${op1 - op2}`);

};

function mult() {
    return console.log(`умножение ${op1 * op2}`);

};

function div() {
    return console.log(`деление ${op1 / op2}`);

};
if (operation == '+') {
    add()
} else if (operation === '-') {
    sub()
} else if (operation === '*') {
    mult()
} else if (operation === '/') {
    div()
};