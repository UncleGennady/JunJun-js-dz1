'use strict';
let op1 = +prompt('число1', '');
let operation = prompt('Выбери действие +, -, *, /', '');
let op2 = +prompt('число2', '');
console.log(operation);
if (operation == '+') {
    alert(op1 + op2);
} else if (operation == '-') {
    alert(op1 - op2);
} else if (operation == '*') {
    alert(op1 * op2);
} else if (operation == '/') {
    alert(op1 / op2);
}