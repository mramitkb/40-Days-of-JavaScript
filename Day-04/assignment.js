// Task 1. What will be the output of this code snippet and why?
let day = "Monday";
switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
/**Output: Here, the value has started with capital letter on Monday, but in the case we use 
 the value starts with small letter. That's the difference between those. So that, we will
 get output of the "default" case = "It's a normal day." instead of 1st case.
*/

// Task 2. Build an ATM Cash Withdrawal System.
/** Raja goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows 
      multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”. */

let amount = 5000;
const ok = amount % 100;
if (amount % 100 === 0) {
  console.log("Withdrawal Successful.");
} else {
  console.log("Invalid Amount.");
}

// Task 3. Build a Calculator with switch-case
/**Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation
  on two numbers. Print the output on the console. */
const a = 18;
const b = 6;
const calculation = a % b;
switch (calculation) {
  case a + b:
    console.log("Addition is :", calculation);
    break;
  case a - b:
    console.log("Subtraction is :", calculation);
    break;
  case a * b:
    console.log("Multiplication is :", calculation);
    break;
  case a / b:
    console.log("Division is :", calculation);
    break;
  case a % b:
    console.log("Remainder is :", calculation);
    break;
  default:
    console.log("Not an Arithmetic Operators.");
}

// Task 4. Pay for your movie ticket
/**Imagine, the INOX charges ticket prices based on age:

Children (<12 years): $3
Adults (12 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age. */
const age = 45;
if (age < 12) {
  console.log("Children's ticket price is: $3");
} else if (age >= 12 && age <= 60) {
  console.log("Adults ticket price is: $10");
} else {
  console.log("Seniors ticket price is: $8");
}

// Task 5. Horoscope Sign Checker
/**Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.)
    based on a person’s birth month. Make it month bases, not date based. 
    Like March and April born are Aries, April and May born are Taurus, and so on.
    NB: Do not use if-else. */
const month = "January";
switch (month) {
  case "January":
    console.log("Your Zodiac sign is 'Aquarius'.");
    break;
  case "February":
    console.log("Your Zodiac sign is 'Pisces'.");
    break;
  case "March":
    console.log("Your Zodiac sign is 'Aries'.");
    break;
  case "April":
    console.log("Your Zodiac sign is 'Taurus'.");
    break;
  case "May":
    console.log("Your Zodiac sign is 'Gemini'.");
    break;
  case "June":
    console.log("Your Zodiac sign is 'Cancer'.");
    break;
  case "July":
    console.log("Your Zodiac sign is 'Leo'.");
    break;
  case "August":
    console.log("Your Zodiac sign is 'Virgo'.");
    break;
  case "September":
    console.log("Your Zodiac sign is 'Libra'.");
    break;
  case "October":
    console.log("Your Zodiac sign is 'Scorpio'.");
    break;
  case "November":
    console.log("Your Zodiac sign is 'Sagittarius'.");
    break;
  case "December":
    console.log("Your Zodiac sign is 'Leo'.");
    break;
  default:
    console.log("Invalid Month!");
}

// Task 6. Which Triangle?
/* A triangle has 3 sides. A Triangle type is determined by its sides:
All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine
the triangle type. Change the inputs every time manually to see if the output changes correctly.*/

const oneSide = 3;
const twoSides = 6;
const threeSides = 9;

if (oneSide === twoSides && oneSide === threeSides) {
  console.log("All sides equal is called, Equilateral Triangle.");
} else if (
  oneSide === twoSides ||
  oneSide === threeSides ||
  twoSides === threeSides
) {
  console.log("Two sides equal is called, Isosceles Triangle.");
} else {
  console.log("All sides different is called, Scalene Triangle.");
}
