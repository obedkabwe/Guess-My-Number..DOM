'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="🎉correct answer";
/*
document.querySelector('.number').textContent= 20;
document.querySelector('.score').textContent=15;

document.querySelector('.guess').value= 22;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener ('click' ,function() {
    console.log(document.querySelector('.guess').value)
})
