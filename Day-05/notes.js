/**SUMMARY
 * Loops
 * Iterations
 */

// Loops : When we are doing the same task/work multiple times repeatedly is called Loop.

// Iterations: When in for/while/doWhile loops we are automat our tasks and loops are doing
/** the process 1 time, 2 times, 3 times... like this, that process is called Iteration. */

/** There are 3 types of loop in JavaScript*/

// 1. for loop : When we will do tasks that we know how many times or fixed amount of times it will repeat...we will use "for" loop. :
//  sum of all even numbers from 1 to 100
let sumEven = 0;
for (let count = 1; count <= 100; count++) {
  if (count % 2 === 0) {
    sumEven += count;
  }
}
console.log("Total sum of the count is:", sumEven);

//  sum of all odd numbers from 1 to 100
let sumOdd = 0;
for (let count = 1; count <= 100; count++) {
  if (count % 2 !== 0) {
    sumOdd += count;
  }
}
console.log("Total sum of the count is:", sumOdd);

// get all the characters from "JavaScript"
let code = "JavaScript";
for (let i = 0; i < code.length; i++) {
  console.log(code.charAt(i));
}
// nested loop:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

// Break: Break is EXIT from the loop and there will be no more Iteration on the loop.
// Break with loop
for (let k = 1; k <= 5; k++) {
  if (k > 3) {
    break;
  }
  console.log(k); // output: 1 2 3
}

// Continue: Continue is SKIP the targeted Iteration and move to the next Iteration on the loop.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); // output: 1 3 5 7 9
}

// Handle multiple Counters
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}
// here i = 1 is a counter, j = 10 is a counter

// 2. while loop : When we don't know, how many times will be repeated the tasks ..we will use "while" loop.
let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}

// 3. do while loop : When we will execute the code at-least 1 time before the condition, we will use "do while" loop.
let num = 15;
do {
  console.log(num);
  num++;
} while (num <= 25);

// Infinite loop: When the conditions of the loops are iterate and execute but never ending its called Infinite loop.
/* That's happened because of some mistake in condition some times
 * for loop : Initialization; Condition has mismatch
    for (let i = 1; i < 10; i--) {
        console.log(i); // here i is decreasing and condition is greater than 10(mistake)
    }
 * while loop : If the condition is true and always be true
    let infinite = 10;
  while (infinite > 1) {
    console.log(infinite);
    infinite++; // here, 10 will be always bigger than 1
  }

 * do while loop : same as while loop
    let counted = 100;
  do {
    console.log(counted);
    counted++;
  } while (counted > 10); // here 100 will be always bigger than 10
 */
