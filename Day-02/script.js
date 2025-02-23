// Task 1:
let personName = "Amit";
const age = 28;
let isStudent = true;
let favorite = "Coding";

// Task 2:
console.log(personName);
console.log(age);
console.log(isStudent);
console.log(favorite);

// Task 3:
personName = "Ayushman"; // let can be reassign the value, but can't redeclared;
console.log(personName);
// age = 39; //Constant can't reassign/redeclare new variable/value(give an ERROR).
console.log(age);

// Task 4:
// Object......
const shopping = {
    laptop: 150000,
    chair: 12000,
    isChairWhite: true,
    desk: 10000,
    isDeskWhite: false
}
console.log(shopping);
shopping.laptop = 33333;
console.log(shopping);
shopping.isChairWhite = 'Black';
console.log(shopping);
// here, we can reassign the constant objects > value. (In Non-Primitive Data Types)
// also can change the inside value.
// but can't redeclared the same variable name

// Array......
const results = [74, 93, 59, 66, 83, 80];
console.log(results);
let newResults = results;

const sum = 100;
newResults.push(sum)
console.log(newResults); // same conditions as object, but both has different use case in inner-side.
