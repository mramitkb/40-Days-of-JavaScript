/* 1. Scope: Scope means the visibility of variables. It determines where a
   variable can be accessed or modified in the code.
    1. Global Scope
    2. Function Scope
    3. Block Scope
    4. Module Scope(learn this one later)
*/

/* Global Scope: Variables can be accessed from anywhere in the code.
   Globally, inside a Function Scope, inside a Block Scope or anywhere. 
   It doesn't matter the variable is var/let/const.*/
   var gVar = "Global Variable"; // Global Scope
   let gLet = "Global Let"; // Global Scope
   const gConst = "Global Const"; // Global Scope
    function globalScope() {
         console.log(gVar); // Accessible
         console.log(gLet); // Accessible
         console.log(gConst); // Accessible
    }
    globalScope();

/* Function Scope: Variables can be accessed or modified only inside the
   function scope(var/let/const). */
    function functionScope() {
          var fVar = "Function Variable"; // Function Scope
          let fLet = "Function Let"; // Function Scope
          const fConst = "Function Const"; // Function Scope
          console.log(fLet);
     }
     functionScope();
    //  console.log(fVar); // Not Accessible
    //  console.log(fLet); // Not Accessible
    //  console.log(fConst); // Not Accessible

/* Block Scope: Variables like let or const can be accessed or modified only
   inside the block scope, but var can be accessed outside of the block scope this time. */
    {
        var bVar = "Block Variable"; // Block Scope
        let bLet = "Block Let"; // Block Scope
        const bConst = "Block Const"; // Block Scope
        console.log(bConst); // Accessible
    }
    console.log(bVar); // Accessible
    // console.log(bLet); // Not Accessible
    // console.log(bConst); // Not Accessible

/* 2. Scope Chain: A simple way to understand the Scope Chain is that 
    when a variable is not found in the current scope, JavaScript is looking 
    for it in the outer scope(one level higher) and if it is not found 
    there, JavaScript will again look for it in one level more outer scope and 
    this process will continue until the variable is found or the global 
    scope is reached. If the variable is not found in the global scope also,
    then the output will be ReferenceError.
*/
let a = 222;
function chaining() {
    let b = 333;
    function inner() {
        // console.log(c); // ReferenceError: c is not defined
    }
    inner();
}
chaining(); 

/* 3. Variable Shadowing: When we have a variable in the outer scope
    and also inner scope with the same name. Then JavaScript will prioritize
    the nearest scope's variable's value to set as a output. This is called
    Variable Shadowing. */
let x = 10;
function shadowing() {
    let x = 20; // Shadowing the outer x
    console.log(x); // Output: 20 (This is called Shadowing)
}
shadowing();