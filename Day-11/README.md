### Day 11: Closures

## Task 1. What will be the output of the following code and why?
```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
```
# Explanation 1:
output : 1
output : 2
Because, as we know the Closure, count variable will be closed inside
the inner() function and can be remember the updated value even after
executed the outer() function. So, we stored the inner() function's value(closure)
in counter variable and we will get updated value every time call this one.



## 2. What will be the output and why?
```js
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
```
# Explanation 2:
output : 100
Same as above, here is another interesting thing that we need to explain.
after returning 10 * 10 = 100 from the testClosure() function with Closure, 
we also need to execute with parenthesis(). Here in the console, 
1st console.log(testClosure()) is keeping the inner side function into it.
Then the 2nd parenthesis() is invoking/calling the returned function.




## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
```js
function createButton() {
    let count = 0;

    const button = document.createElement("button");
    button.textContent = "Buy Now";
    document.body.appendChild(button);

    const displayCount = document.createElement("p");
    displayCount.textContent = "Button clicked 0 times.";
    document.body.appendChild(displayCount);

    button.addEventListener("click", function() {
        count++;
        displayCount.textContent =  `Button clicked ${count} times.`;
    })

}
createButton();
```



## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.
```js
function createMultiplier(multiplier) {
    return function(num) {
        multiplier = num * multiplier;
        console.log(multiplier);
    }
}
const mainMultiplier = createMultiplier(2);
mainMultiplier(5);
```



## 5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above.
# Explanation 5:
Answer is `(2) The object remains in memory as long as the closure exists.`
Because, object is a references by closure so it will remember the value 
and object won't be cloned for its closure effect.

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.
```js
function factoryOfCounters() {
    let count = 0;

    return {
        "increment" : (add) => {
            count = count + add;
            console.log(`Increment count is ${count}`);
        },
        "decrement" : (deduct) => {
            if(deduct > count) {
                console.warn("You haven't enough Counters.");
            } else{
                count = count - deduct;
                console.log(`Decrement count is ${count}`);
            }
        },
        "reset" : () => {
            count = count - count; // or count = 0
            console.log(count);
        }
        
    }
}
const factory = factoryOfCounters();
factory.increment(86); // 0 + 86 = 86
factory.decrement(55); // 86 - 55 = 31
factory.reset(); // 31 - 31 = 0 or initialize with 0
```