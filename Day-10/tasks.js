// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob"; // Output will be "Bob"
    inner();
}

outer();
/* Explanation 1: here, user = "Alice" is in Global Scope. 
    Go through the outer() function> there is a function inner()
    and user = "Bob". Then, we will go with Execution Phase of the inner()
    function. 
    console.log(user) will search for the variable(user) inside the inner()
    function. If there isn't the user variable, it will search one level higher
    means into the outer function(thats called  Scope chain).
    So, here we got the user = "Bob" inside the outer() function.
    Finally, the output will be "Bob".
*/




// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);


/* Explanation 2: here, total is declared outside of the function means 
    in Global scope. So, it can be access anywhere from the code and can 
    be a major problem/sometimes cause an error.
    We should declare a variable inside the function to avoid those kinds of
    problems and we can also use initial value for the parameter also.
    So, we can use the following code:
    function add(num) {
        let total = 0; // Local variable
        total += num;
        return total;
    }
*/



/* 3. Create a function with a nested function and log a 
    variable from the parent function. */
function parentFunction() {
    let parentVariable = "I am from the parent function";
    function child1() {
        let child1Variable = "I am from child 1";
        function child2() {
            let child2Variable = "I am from child 2";
            console.log(parentVariable);
            console.log(child1Variable);
            console.log(child2Variable);
        }
        child2();
    }
    child1();
}
parentFunction();



/* 4. Use a loop inside a function and declare a variable inside
    the loop. Can you access it outside? */
    function loopFunction() {
        for(let i = 1; i <= 10; i++) {
            var result = 1234;
            let result2 = 5678;
        }
        console.log(result); // output: 1234
        console.log(result2); // ReferenceError: result2 is not defined
    }
    loopFunction();

/* Explanation 4: If i declare a variable with var, I will be able to access it 
    outside the loop but not outside the function. Because var is a function-scoped.
    But if i declare let or const, i won't be able to access them outside the 
    loop because they are block-scoped.
*/



/* 5. Write a function that tries to access a variable declared inside another function. */
function outerFunction() {
    console.log("Outer function");
    function innerFunction() {
        let accessInner = "Inner function";
    }
    innerFunction();
    console.log(accessInner); // ReferenceError: accessInner is not defined
}

outerFunction();

/* Explanation 5: We can't access a variable which is inside a another function.
    Because variables are block-scoped. we cannot access them from outside but
    we can access a variable from higher level with Scope chaining.
*/



// 6. What will be the output and why?
console.log(a);
let a = 10;
/* Explanation 6: We cannot access let and const variables before declared.
    But we can access var variable before declared. Because In execution
    phase, var variable has a value called -undefined. But let and const doesn't.
    That's why we will get a ReferenceError.
*/



// 7. Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age);
}
console.log(age);
/* Options:

A: In Global
B: Only inside showAge
C: It will cause an error
D: None of the above */

/* Explanation 7: B: Only inside showAge.
    Because age is declared inside the function. But we are trying to access
    it from outside the function. And also showAge() function is not called.
    So, we will get a ReferenceError.
    If we call the function(before outside's clg), we will get output inside
    the showAge() function.
*/



// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

/* Explanation 8: We learn about the variable shadowing.
    So, 1st message = "Hello"
    2nd we will go to the outer() functions inside and there is also
    same variable called message but value is "Hi".
    Then, we will go inside the inner() function and there is a clg
    for "message".
    Now, it will search for the variable inside the inner() function.
    If we couldn't find it inside the function, it will search one level
    higher(scope chain). 
    This time, inside the outer() function, we have the message variable.
    Here is the question: which message will be printed?
    JavaScript will search for the nearest variable with the same name.
    Finally, output will be "Hi".
*/



// 9. What will be the output and why?
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

/* Explanation 9: Same as Explanation No-8.
    N:B: JavaScript will search for the nearest accessible variable
    with the same name.
*/



// 10. What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}
const reduce = counter();
reduce();
reduce();

/* Explanation 10: "Closure" is the main key here. 1st we are keeping the
    counter() function to a variable called reduce.In the counter function
    there has a count variable with value 0 and a return function. So, count's 
    default initial value is 0 but when we call the reduce() function,
    it will decrement the value. So, output will be -1 and for the closure
    concept, the value of count(-1) will be saved in the return function's
    count variable. It won't be reset to 0 again for Closure concept.
    So, when we call again the reduce() function, it will decrement the value
    from -1 to -2.
    1st Output: -1
    2nd Output: -2
*/