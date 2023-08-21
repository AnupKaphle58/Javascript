// 1) if, if….else, if….else if….else statement:

let condition = true;
let vottingAge = 18;

// if
// If the condition is true, the block inside the if statement is executed.

if (condition) {
  console.log("If block is executed.");
}

// if.....else
// if…..else executes the code inside the if block if the statement is true else executes the code inside the else block.

if (condition) {
  console.log("If block is exectued from if...else block");
} else {
  console.log("Else block is exectued from if...else block");
}

// if….else if….else
// if….else if….else statement uses the else if statement to specify the new condition if the previous statement is false.

if (vottingAge == 18) {
  console.log("Congrats! You can now enjoy your voting rights");
}
if (vottingAge < 18) {
  console.log("Sorry! You are cannot vote.");
} else {
  console.log("You can enjoy your voting rights");
}
