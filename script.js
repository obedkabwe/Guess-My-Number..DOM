'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="๐correct answer";

document.querySelector('.number').textContent= 20;
document.querySelector('.score').textContent=15;

document.querySelector('.guess').value= 22;
console.log(document.querySelector('.guess').value);
*/

const secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent= secret;
document.querySelector('.check').addEventListener ('click' ,function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess);
  /*
if (!guess) {
    document.querySelector('.message').textContent="๐ No Number";
  }else(guess === secret); {
    document.querySelector('.message').textContent="๐correct answer";
  }  if(guess > secret);{
    document.querySelector('.message').textContent= "๐ High Number" ;
  } else if(guess < secret);{
    document.querySelector('.message').textContent= "๐ Low Number" ;;
  }    
  
})

*/
    
if (!guess) {
    document.querySelector('.message').textContent="๐ No Number";
    
} else {
    document.querySelector('.message').textContent="๐ Put Number";
}if (guess === secret) {
    document.querySelector('.message').textContent="๐correct answer";
} else {
    document.querySelector('.message').textContent="๐Wrong answer";
}if (guess > secret) {
    document.querySelector('.message').textContent= "๐ High Number" ;
} else {
    document.querySelector('.message').textContent= "๐ Low Number" ;
}
})