// Instructions:  You've been given the HTML template for a JavaScript 'calculator.'  Implement functionality such that when two numbers are entered in the input fields, pressing one of the 'operator' buttons results in the mathematical calculation for those two numbers.  (Example:  If the boxes contain 3 and 4, pressing the '+' button should put a 7 in the display box.  If '-' is pressed, -1 should be displayed.  If '*' is pressed, 12 should be displayed.  If '/' is pressed, 0.75 should be displayed.)

// BONUS:  Use a single event listener to accomplish this task, rather than 4 of them.

// You've been given all the cached element references:
const mathResult = document.getElementById('mathResult');
const input1 = document.getElementById('mathInput1');
const input2 = document.getElementById('mathInput2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const timesBtn = document.getElementById('times');
const dividedBtn = document.getElementById('divided');
// Use this cached element reference if you're attempting the bonus.
const mathDiv = document.getElementById('operators');