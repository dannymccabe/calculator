//show inner html of clicked buttons on screen NOT WORKING
const screen =  document.getElementsByClassName("screen");

const buttons = Array.from(document.getElementsByTagName("button"));

//adaptation from a tutorial that isn't working
buttons.map(button => {
    button.addEventListener("click", (e)=> {
        switch(e.target.innerText){
            default:
                screen.innerText += e.target.innerText;
        }
    })
})

// functions used in the past to do maths WORKING
const add = function(num1, num2) {
	return num1 + num2;
}; 

const subtract = function(num1, num2) {
	return num1 - num2;
}; 

const sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
      return arr.length
      ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};
const divide = function(arr) {
    return arr.length
    ? arr.reduce((accumulator, nextItem) => accumulator / nextItem)
    : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
};

// psudocode steps for 5x5=25
// 1. create an empty array to store input
const userInput = [];
// 2. add event listener to numbers (click) that pushes them to an array.
const five = document.getElementById("five");
five.addEventListener("click", function(){});//to .screen function) print number 1 as text content 
//get text node from .screen 
// 3. add event listener to multiplication button to call multiply function.
const multiply = document.getElementById("times");
// 4. add clicked numbers as arguments for the multiplication function.
times.addEventListener("click", multiply(userInput));
// 5. add event listener to the equals button to run multiplication function.
const equals = document.getElementById("equals");
equals.addEventListener("click", function(){});
// 6. return the answer to the screen. Create a function to replace textContent of .screen class. 

// 7. add event listener to AC to clear the screen.
const clear = document.getElementById("ac");
clear.addEventListener("click", function(){});

