// 1) For loop

for (initialization; stopping_condition; iteration) {
  // code block to be executed
}

// An initialization starts the loop and can also be used to declare the iterator variable.
// A stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// An iteration statement is used to update the iterator variable on each loop.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2) While loop
let counterVariable;
while (stopping_condition) {
  //body
  //iteration
}

// We start our loop with the keyword while followed by our stopping condition, or test condition.
// This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run.
// Once it evaluates to false the loop will stop.
let test_condition = 0;
while (test_condition < 10) {
  console.log(test_condition);
  test_condition++;
}

// 3)Do………while loops:
// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

let counterVariable1;
do {
  //body
  iteration;
} while (stopping_condition);

// Do while loop will run atleast once even if the condition is fasle as it first runs and check the condition.

// 4) break statement
// The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement.

const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
