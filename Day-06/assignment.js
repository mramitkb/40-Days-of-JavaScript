/* 1. Write a Function to Convert Celsius to Fahrenheit
      Create a function celsiusToFahrenheit(celsius) that converts a temperature
      from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit */ 
      function celsiusToFahrenheit(celsius) {
            const fahrenheit = (celsius * 9/5) + 32;
            return fahrenheit;
        }
      console.log(celsiusToFahrenheit(36));
    
    /* 2. Create a Function to Find the Maximum of Two Numbers
      Write a function findMax(num1, num2) that returns the larger of the two numbers.
      It should work for negative numbers as well.*/
        function findMax(num1, num2) {
          if(num1 > num2) {
            return num1;
          }
          else {
            return num2;
          }
        }
        const max = findMax(66, 4);
        console.log("Max number is", max);
    
    /* 3. Function to Check if a String is a Palindrome
      Create a function isPalindrome(str) that checks if a given string is a palindrome
      (reads the same forward and backward). You can not use any string function that
      we have not learned in the series so far.*/
        function isPalindrome(str) {
          const sortStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
          const reverseStr = sortStr.split('').reverse().join('');
          
          if(sortStr === reverseStr) {
            return "This is Palindrome.";
          }
          else {
            return "This isn't Palindrome."
          }
        }
        console.log(isPalindrome("Race Car"));
        
    /* 4. Write a Function to Find Factorial of a Number
      Create a function factorial(n) that returns the factorial of n. 
      Example 5! = 5 * 4 * 3 * 2 * 1 */
        function factorial(n) {
          if(n < 0) {
            return "Factorial should be a Positive Number.";
          }
          if(n === 0) {
            return 1;
          }
          else {
            return n * factorial(n - 1);
          }
        }
        console.log(factorial(5));
        // Looping method
        function factorial2(n2) {
          if(n2 < 0) {
            return "Factorial should be a Positive Number.";
          }
          if(n2 === 0) {
            return 1;
          }
          let demo = 1;
          for(let i = 1; i <= n2; i++) {
            demo *= i;
          }
          return demo;
        }
        console.log(factorial2(6));

    /* 5. Write a function to Count Vowels in a String
      Write a function countVowels(str) that counts the number of vowels 
      (a, e, i, o, u) in a given string. */
      function countVowels(str) {
        const findVowels = str.toLowerCase().split('');
        let count = 0;
        for (const vowel of findVowels) {
          if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' ) {
            count += 1;
          }
        }
        console.log(count);
        return count;
      }
      countVowels("JavaScript");
    
    /* 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
      Write a function capitalizeWords(sentence) that takes a sentence and capitalizes
      the first letter of each word. You can use the toUpperCase() method of string to
      convert the lowercase to uppercase. */
      function capitalizeWords(sentence) {
        const words = sentence.split(' ');
        const capitalize = [];
        for (const word of words) {
          const capitalFirst = word[0].toUpperCase() + word.slice(1).toLowerCase();
          capitalize.push(capitalFirst);
        }
        return capitalize.join(' ');
      }
      console.log(capitalizeWords("i am a full-stack web developer."));
    
    /* 7. Use an IIFE to Print “Hello, JavaScript!”
      Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second
      word must be supplied using parameter and argument. */
        (function(param) {
          console.log("Hello,", param);
        })("JavaScript!");
    
    /* 8. Create a Simple Callback Function
      Write a function greet(name, callback), where callback prints a message using
      the name parameter. */
        function greet(name, callback) {
          callback(name);
        }
        greet("Congratulation's 'Amit' for your Full-Stack Developer Journey.", function(name) {
          console.log(name);
        })

    /* 9. Create Call Stack Execution Diagram for this flow */
        function f1() {
        }
        function f2() {
            f1();
        }
        f2();
        /* We can see that, f2() function is calling 1st, so it will go inside the f2() function
         and there is a function called f1(). So, this time the flow will go inside to the f1() function
         and give the output of f1() function and get back to the f2() function as it is the main calling flow.
         and then its also print the output.
         f2
         f1
        */
    
    /* 10. Create Call Stack Execution Diagram for this flow */
        function f1() {
        }
        function f2() {
        }
        function f3() {
            f1();
        }
        f2();
        f3();
        f1();
        /* As we are seeing there is output f2() function as 1st one, so this will go inside the function and
          return the output.
          Then f3() function is the 2nd one and this time it will go inside the f3() function and there is
          f1() function inside the f3() function. so this will output f1() result 1st, then close it and also f3()
          will be closed. 
          lastly, f1() function is called itself so inside the function it will go and return the output and stop the callStack.
          f2
          f3(if anything before insider function)
          f1
          f1
          */