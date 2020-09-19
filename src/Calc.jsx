import React from 'react';
import ReactDOM from 'react-dom';

function Add(a, b) {
    return a + b;
}

function Sub(a, b) {
    return a - b;
}

function Mult(a, b) {
    return a * b;
}


function Div(a, b) {
    return a / b;
}

function Calc() {
    return <ol>
        <li>Sum of two numbers {Add(40, 10)}</li>
        <li>Substraction of two numbers {Sub(40, 20)}</li>
        <li>Multiplication of two numbers {Mult(40, 20)}</li>
        <li>Division of two numbers {Div(40, 20)}</li>
    </ol>;
}

export { Calc };