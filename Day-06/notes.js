// Todays learning path
/* 
 * 1. What is function?
 * 2. Defining a Function
 * 3. Expression
 * 4. Parameters and Arguments 
 * 5. Return in function
 * 6. Default Parameters
 * 7. Rest Parameters
 * 8. Nested Function
 * 9. Callback Function
 * 10. Pure Function
 * 11. HOF(Higher Order Function)
 * 12. Arrow Function
 * 13. IIFE(Immediately Invoked Function Expression)
 * 14. Call Stack
 * 15. Recursion
 */

// 1. function : Function is like where we can write codes/lines that we can use them
        // whenever we need on the project without writing them repetitively.

// 2. Define a function: 
    function newFunction() {
        console.log('Defining a Function.');
    }

// 3. Expression: We know that, = is the expression and left side is variable name and right side will be the value.
        // So, function is a non-primitive data types and it can be stored in a variable also.
    const foodCosts = function costs() {
        console.log('Calculate all cost.');
    }

// 4. Parameters and Arguments : 
/** Parameters : In the parenthesis of the function, we will use some value as we needed
        those value will be called as parameters.*/
/*  Arguments : When we need to call the function, we have to assign values as we needed
        for the functions parameter.*/
    function paramsFromArgu(a,b) { // here is parameters
        console.log(a + b);
    }
    const argue = paramsFromArgu(5,4); // here is arguments

/* 5. Return uses in function : In some cases, we have to use "functions value" in multiple lines.
        in those cases, we will return the value of the function and also can assign them whenever
        we need to use as a variable(later).*/
    function forReturn(a, b) {
        const sum = a + b;
        return sum; 
    }
    const ret = forReturn(9, 2); 
    console.log(ret);
    // Now, we can use the sum of "forReturn function" whenever we need(reusable).

/* 6. Default Parameters : In function, we usually use parameters as per arguments. sometimes 
        we pass arguments(like 2 arguments) but in the function, parameters are 3. So, in that case
        we are not getting the calculation what we want! Here, we will use the default parameters even if
        there have missing any of the arguments*/
    function defaultParams(a = 3, b = 2, c = 1) {
        const sum = a + b + c;
        return sum;
    }
    const fromArgu = defaultParams(9, 8);
    console.log(fromArgu);
    /* here, 3rd argument is missing, so, param no 3 will be as default value c = 1*/

/* 7. Rest Parameters : In function, sometimes we will set arguments more than the parameters have. In this case, 
        we will use as per needed params and then rest of the arguments will be stored as last parameter(...paramName)
        NB: rest parameter should be use as last parameter and it will be an Array after getting all values together.*/
    function restParams(a, b, c, ...rest) {
        console.log(a, b, c, rest);
    }
    const rest = restParams(3,6,9,11,33,55,66,99); //after 3, 6, 9 all the other arguments will be set as rest parameter.

/* 8. Nested Function : When inside a function has multiple/another function is called Nested Function.

    == Outer Function : When a function holds another function inside is called Outer function
    
    == Inner Function : When a function is inside of a function is called Inner Function.
    NB: We can call/invoke the outer function but can't call the inner function from  outer function directly.
    however we can return the whole inner function, and then can use it anywhere we need.*/

    function outer() { // that is outer function
        console.log("Outer here."); 
        return function inner() { // that is inner function and can return to use it later from here after call.
            console.log("Inner here.");
        }
    }
    
/* 9. Callback Function : Inside a function when we set function as a parameter from argument and call/invoke it inside the function
        is called Callback Function.*/
        function mainFunc(callFunc) {
            console.log("Main Function is executing.");
            callFunc(); // call the function from parameter.
        }
        const callFunc = function callFunc() { // here we can create function without name, it's called Anonymous function.
            console.log('Here is call function.');
        }
        mainFunc(callFunc); // NB: we will use callback function for conditions

/* 10. Pure Function : In function, when we give inputs and get the same output is called Pure function. But here, we are not doing things that what actually function do.
        and in this  way, sometimes we write function with conditions + if we produce output which has connection outside of the function is called SideEffects.*/
        let me = "I'm";
        function mySelf(name) {
            // console.log("I'm", name); //its pure function but when we use something from outside of the function, it will be a sideEffect.
            console.log(me, name);
        }
        mySelf("Amit.");
        mySelf("Amit.");
        me = 'This is'; // sideEffect
        mySelf("Amit.");
        mySelf("Amit.");
        mySelf("Amit.");

/* 11. HOF(Higher Order Function) : Higher Order Function can take a function as a parameter/argument and also can return a function from it.*/
        function hof(takeFunc) {
            takeFunc() // take a function as parameter/argument
        }
        hof(function takeFunc(){
            console.log("Taking as a parameter.");
        })

        function retFunc() {
            return function() {
                console.log('Returning a function.');
            }
        }
        const funcAsReturn = retFunc();
        
        funcAsReturn();

/* 12. Arrow Function : If in the body have one statement, we can use the statement without even {} curly braces and return.
        if there are multiple statement, we must have to use {}curly braces and return in the statement.*/
let arroW = (greeting) => greeting + 'in Arrow Function.';
console.log(arroW("with Single statement "));

let multiples = (multi) => {
    // 
    //
    return multi + "in Arrow Function.";
};
console.log(multiples("with Multiple statement "));


/* 13. IIFE(Immediately Invoked Function Expression) : If you want to use something independently execute without being called... like(whatsapp, instagram chatbot) we will use IIFE*/

(function(number){
    console.log("IIFE", number);
})(9) // set argument as a parameter to use

/* 14. Call Stack : Call Stack is a process that when we call functions > get inside > also go to multi layer as needed >
            call them > execute > and get outside of the function. */
function outside() {
        console.log("This is Main Function.");
        in1()
    }
    function in1() {
        console.log("1st insider function.");
        in2()
    }
    function in2() {
        console.log('This is the last One.');
    }
    outside();

/* 15. Recursion : Recursion means a function call itself(as per need).*/
    function recurs(count) {
        console.log("Recursion no. ", count);
        if(count === 0) {
            console.log("Only Positive Numbers...");
            return;
        }
        recurs(count-1)
    }
    recurs(5)

