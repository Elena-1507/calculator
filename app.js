'use strict';
const sum = document.querySelector('.sum');
const min = document.querySelector('.min');
const mul = document.querySelector('.mul');
const del = document.querySelector('.del');
const resu = document.querySelector('#resu');

function Sum() {
let a = +document.querySelector('.a').value;
let b = +document.querySelector('.b').value;
resu.innerHTML = a + b;
}
function Min() {
    let a = +document.querySelector('.a').value;
    let b = +document.querySelector('.b').value;
    resu.innerHTML = a - b;
    }
function Mul() {
    let a = +document.querySelector('.a').value;
    let b = +document.querySelector('.b').value;
    resu.innerHTML = a * b;
    }

function Del() {
    let a = +document.querySelector('.a').value;
    let b = +document.querySelector('.b').value;
    resu.innerHTML = a / b;
     }

sum.addEventListener('click', Sum);
min.addEventListener('click', Min);
mul.addEventListener('click', Mul);
del.addEventListener('click', Del);




