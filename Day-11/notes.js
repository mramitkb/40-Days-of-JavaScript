/**
 1. Closure: Closure is a function that can remember the variable's value
    even after the outer function has been executed.
    Closure allows a function to access a variable from its outer scope even
    after the outer scope has been executed. 
 */

function outer() {
   let x = 10;
   return function inner() {
      x++;
      console.log(x);
   }
}
const retValue = outer();

retValue();
retValue();
retValue();

// Banking example

function createAccount(initialBalance) {
   let balance = initialBalance;

   return {
      "deposit" : (amount) => {
         balance = balance + amount
         console.log(`You Deposited ${amount}, current Balance is ${balance}`);
      },
      "withdraw" : (amount) => {
         if(amount > balance) {
            console.warn("Insufficient Balance");
         }else {
            balance = balance - amount;
            console.log(`You Withdrawn ${amount}, current Balance is ${balance}`);
         }
      },
      "checkBalance" : () => {
         console.log(`Your Current Balance is ${balance}`);
      }
   } 
}
const myAccount = createAccount(1000);
myAccount.deposit(50);
myAccount.withdraw(40);
myAccount.checkBalance();

// Closure & memory leak
function dealingWithBigDat() {
   let bigData = new Array(500).fill("*");
   return function () {
      console.log(bigData[4]);
   }
}
const allData = dealingWithBigDat();
allData(); // this will cause memory leak (Execution Context)

/* Advantages of Closure
   1. You can keep the variable private without exposing it.
   2. You can stop variable pollution.
   3. You can create a Function Factory.
   4. You can keep the variable alive between multiple calls.
*/
function timer() {
   let secs = 0;
   
   return function() {
      secs++;
      console.log(secs);
   }
}
const timerFunc = timer();
timerFunc(); // output 1
timerFunc(); // output 2
timerFunc(); // output 3
