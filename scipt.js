// functions used in the past to do maths
const add = function(num1, num2) {
	return num1 + num2;
}; // correct

const subtract = function(num1, num2) {
	return num1 - num2;
}; // correct

const sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
      return arr.length
      ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
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
const one = document.getElementById("one");
one.addEventListener("click", //to screen function)
// 3. add event listener to multiplication button to call multiply function.
// 4. add clicked numbers as arguments for the multiplication function.
// 5. add event listener to the equals button to run multiplication function.
// 6. return the answer to the screen.
// 7. add event listener to AC to clear the screen.
