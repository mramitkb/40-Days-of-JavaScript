<!-- In the Value Assignments -->
    <!-- 1. -->
let flower = "Rose";

"let" is the  Specifier
"flower" is the name of the variable and
"Rose" is the value of the variable

    <!-- 2. -->
let vegetable = "Potato"
flower = vegetable;
here, we reassign the value of flower - "Rose" to vegetable value.

<!-- Type of Data Types -->
There are two types of Data Types.
1. Primitive - string, number, boolean, null, undefined, symbol, BigInt
2. Non-Primitive - arrays, objects, functions, dates, regex

<!-- pass by value -->
flower = vegetable;
If I assign vegetable to the flower, it will replace the flower value and assign
vegetables value. So, its changing the flower value but vegetable value will be intact. Its called PASS BY VALUE and happens only in primitive data type values.
<!-- pass by reference -->

<!-- Variable Naming -->
1. We must use digits or letters.
2. We can use _ and $ sign for variable name.
3. First letter can't be a digit.
4. We can't use JS Reserved Keywords.
5. Variables are case sensitive, camelCase is better to use for variable name.
6. Human Readable meaningful variable name.
7. The name should match with the cause(naming should be meaningful for the value).

/* Types  Variables

There are 3 variables var, let, const

1. var = it can be use globally, re-declared, reassign. But can be a big problem with code, mis-conception.
2. let = can't redeclare, but it can reassign values.
3. const = once declared then its fixed. Can't redeclare/reassign values.
*/

// var
var fullName = 'Amit';
console.log(fullName);
var fullName = 'Ayushman'
console.log(fullName);

// let
let price = 30;
// let price = 25; // can't redeclared(result error)
price = 99; // can be reassign
console.log(price);

// const
const carName = 'Tesla';
// const carName = 'Lamborghini'; // can't redeclared(result error)
// carName = 'Porsche'; // can't reassign(Assignment to constant variable)
console.log(carName);


/* Data Types

There are 2 types of Data Types.
1. Primitive Data Types
2. Non-Primitive Data Types

Primitive Data Types...........
1. Number: 30, 94, 29
2. String: "Amit", "Ayushman"
3. Boolean: true, false
4. Null: let a = null; We assign a variable without any value intensionally.
5. Undefined: let x; declared a variable without assign a value.
6. Symbol: let sym = Symbol("id"); Used for unique identifiers in advanced scenarios
7. BigInt: let bigNumber = 9007199254740991n; Used for very large numbers.


Non-Primitive Data Types(also called Reference Data Types)..........
1. Array: [34, "Amit", true, "Germany"];
2. Object: let details = {name: "Amit", adult: true, age: 28};
3. Function: function getText(){return "JavaScript!"};
4. Date: let now = new Date(); used to work with dates and times
5. Regex: Regular Expression - we will learn this deeply.
*/

<!-- Variables in Memory -->
There are 2 types of Memory for Data Types
1. Stack - using for Primitive Data Types value stored
2. Heap - using for Non-Primitive Data Types value stored, for the reference type of
   Data, it will have a unique id/memory address. So that, whenever JS need the data this memory will give immediately to JS.

<!-- JavaScript Grammar -->
When we writes code and see output, JavaScript is doing a process...for output.
1. Tokenizing: At first, JS will divide all of them apart which called Token.
2. Parsing: Then, JS will create a Tree which called AST(Abstract Syntax Tree).
3. Interpreting: After creating AST, JS will find that is the code written correctly
   or not, then it will give the output.