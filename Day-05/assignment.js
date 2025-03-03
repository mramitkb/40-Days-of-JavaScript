// Task 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
for(let i = 1; i<= 5; i++){
  let pyramid = '';
  for(let count = 1; count <= i; count ++){
    pyramid += '*';
  }
  console.log(pyramid);
}


// Task 2. Create Multiplication Table (Using for loop)
for (let i = 1; i <= 10; i++) {
  let num = 3;
  const multi = num * i;
  console.log(`${num} x ${i} = ${multi}`);
}


// Task 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log("Summation of all odd numbers are", sum);



// Task 4. Skipping Multiples of 3
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}



// Task 5. Reverse Digits of a Number (Using while loop) = Input: 6789
let num = 6789;
let reverse = 0;
while(num > 0) {
    let digit = num % 10; // got the last digit 9.
    reverse = reverse * 10 + digit; // add 9 to the reverse
    num = Math.floor(num / 10); // Math.floor to get digits without decimal digit(678).
}
console.log(reverse); // get all the digits by using same method.
// Task 6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.

/** for loop : When we know that how many times a block of code will looping, in this condition we will use "for loop".
 === for loop Flow Chart: 
  Start > Initialize variable > check condition > if False(Terminate) > if True(Execute the output) > update the value;
    then again, check condition > true(execute the output) > update the value..... continue the loop until FALSE(condition)
 */

/** while loop : When we don't know that, how many time the loop will be repeating, in this condition we will use "while loop".
 === while loop Flow Chart :
  Start > Initialize variable > check condition > if False(Terminate) > if True(Execute the output) > update the value(if needed);
  then again, check condition > Execute the output > update value.... continue the process
 */

/** do while loop : If we need to execute the output at-least once(before conditioning), we will use "do while loop".
 === do while Flow Chart : 
  Start > Initialize variable > execute the output > Update the variable > check condition > if False(Terminate) > if True(execute output).
   then again, update the value > check condition > execute output > continue the process
*/
