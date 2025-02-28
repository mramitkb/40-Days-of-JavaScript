/** SUMMARY
 * Control flow
 * If-Else condition
 * conditions with only if, see what happened
 * nested if - else
 * ternary operator
 * switch, case, break
 * comparison between if-else and switch-case
 *
 */

/** Control Flow:
 *  JavaScript execute codes line by line , but sometimes we use some conditions that,
 *  only if this condition goes write, then JS control flow will go from this line to
 *  this line. (let's say... line number 45 to 81 - because of the conditions I applied)
 *  That's why, when I will implement some conditions on my code, JS will check line by
 *  line and when it comes to the conditional line - then JS control flow will work like
 *  a open branch... for the condition and go to the another line throw the required conditions.
 */

// If-Else Condition(Simple):
/** It's like, if condition is true then it will return the if condition value
 *  otherwise, it will return the else condition value.
 */
const age = 19;
if (age >= 18) {
  console.log("You can Vote.");
} else {
  console.log("You are not Adult.");
}

// Conditions with only If:
const fName = "Amit";
if (fName === "Amit") {
  console.log("I am Amit.");
}
if (fName !== "Ok") {
  console.log("Here is Amit.");
}
/**This will return every single output with match, here 2 conditions are ok but
 * when we will use if-else then it will go for if condition and check its true or not.
 * if true then it will never ever go to the other conditions for checking and time
 * spending.
 */

// Conditions without Curly Braces:
const number = 333;
if (number === 333) console.log("Number is matching.");
else console.log("Number is Wrong.");
/** here, this will output the result correctly but for only 1 condition, This will
 *  not work when multiple conditions are there. Never use conditions without Curly Braces.
 */

// Nested If-Else Conditions:
/** Nested conditions are like a Trees branch, we will dig into a if condition and there
 * will be another if condition, also elseif and else condition - based on the required conditions.
 */
const destination = "Germany";
const career = "IT";
if (destination === "Germanyd") {
  console.log("Got it");
  if (career === "IT") {
    console.log("I am working on my DREAM!");
  } else {
    console.log("This will also works for me.");
  }
} else {
  console.log(
    "Car Industries - Data Analytics will be another good career for me."
  );
}

// Condition with Ternary :
/** We can create short conditions from if-else to ternary by simple write :
 *  Condition ? if_condition_matched(show this output) : Otherwise(show this output);
 * NB: This is recommended for only simple/one if-else condition.
 */
const myAge = 28;
myAge >= 21
  ? console.log("I am preparing myself for Marriage.")
  : console.log("I need more Time to prepare myself.");

// Switch-case-break:
const days = 4;
switch (days) {
  case 10:
    console.log("Now, I am currently learning Basic level of JavaScript!");
    break;
  case 20:
    console.log(
      "Now, I am currently learning Intermediate level of JavaScript!"
    );
    break;
  case 30:
    console.log("Now, I am currently learning Higher level of JavaScript!");
    break;
  case 40:
    console.log("Now, I can create some awesome projects of JavaScript!");
  default:
    console.log("Long way to go...!");
}

/** NB: Switch will get a true+fixed value and when the switch_Case is matched with value it will
 * return the output as we want. but this also give us all other outputs as well, if we
 * don't use BREAK after our wanted output result, then all the CASES output will be shown as output.
 * Also, we must use the DEFAULT output in the end if we can't match the requirements of other cases.
 */

// Difference between If-Else and Switch-case

/**
 * IF_ELSE: We will use if-else with multiple conditions, nested if-else. This condition is
  for Complex conditions output.
 * SWITCH_CASE: when the value is fixed+single and output will be different when just the value is changed.
  then we will use Switch-case instead of if-else. Switch-case also has some benefit of code execute.
  it is response faster then if-else because when we use if-else, it's going through every conditions
  that we applied on the code and when match , show the output. But switch_case is more faster because
  when we set the fixed value in variable and cases. It's just take the value and jumped on the required case
  value and show the output without checking others upper-side cases_condition.
 */
