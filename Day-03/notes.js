/* 1. Terms:
        // example: let a = x + y;
    // Operator: +, -. *, /, = etc are using as a operator, here x and y are added
                by + sign. So, that's an operator.
    // Operands:  Given that, x and y are individual operand.

    // Expressions: here let a = 3 * 3; we are multiplying 3 * 3, and get output 9.
            this whole process of multiplying 2 operands and then return output
                is called Expressions.
*/


// 2. Operators: There are some Operators in JavaScript. we will learn about them in below:-
        // 1. Arithmetic Operators: (+, -, *, /, % and **) those are arithmetic operator.
                    
                // Remainder Operator: %
                let a = 23 % 3;
                console.log(a);
                /* here, this will divide 23/3 = 21(3*7) and then 23 - 21 = 2 will be
                    the REMAINDER here.(Bhagsesh)
                */

            // Exponential Operator: **
                let b = 3 ** 3; 
                console.log(b); //  3 * 3 * 3 = 27 
    
    // 2. Assignment Operators: It's mean assign values in variables, like:-

            let fName = 'Amit'; // here I assigning a value to the variable, its called assignment operator.

            /* Shorthand: */
                let c = 33;
                c += 3; //means c = c + 3 = 36;
                console.log(c);
                c -= 3; //means c = c - 3 = 33;
                console.log(c);
                c *= 3; //means c = c * 3 = 99;
                console.log(c);
                c /= 3; //means c = c / 3 = 33;
                console.log(c);
                c %= 4; //means c = c % 4 = 1;
                console.log(c);

            // Post-Increment: It's mean, at first it will return the Original value,
                // then return output as increment value.
                let g = 7;
                console.log(g++); // post-increment, output = 7 (default)
                console.log(g); // update output, 8
                console.log(++g); // update output, 8

            /* Pre-Increment: It will directly increase the value and return as output. */
                let h = 9;
                console.log(++h); // output 10
                console.log(--h); // output 9


    // 3. Comparison Operators: <, <=, >, >=,  ==, === those are Comparison Operators.
                    // those will return a boolean value.
                console.log(4 < 3); // false
                console.log(4 > 3); // true
                console.log(4 == "4"); // true
                // this == Equal sign is not recommended, instead use === Strict Equal
                    /* cause, it will check 1st the operands are same Data type or not.
                    if true, then also check the value as well for output.
                    */
                console.log(4 === "4"); // false

        
    // 4. Logical Operators: (&&, ||, ??, !) those are Logical Operators.

            // Logical AND(&&): This operator works between Operand1 and Operand2 only.

                /* RULES: if 1st operand is converted to FALSE than it will return 1st operand,
                        otherwise return 2nd operand */

                    console.log(false && false); // output false (1st one)
                    console.log(false && true); // output false (1st one)
                    console.log(true && true); // output true (2nd one)
                    console.log(true && false); // output false(2nd one)


            // Logical OR(||): 

                /* RULES: if 1st operand is converted to TRUE than it will return 1st operand,
                        otherwise return 2nd operand */

                    console.log(false || false); // output false (2nd one)
                    console.log(false || true); // output true (2nd one)
                    console.log(true || true); // output true (1st one)
                    console.log(true || false); // output true(1st one)


            // Logical NOT(!): This logical NOt operator toggle/change the operand 
                    //  value to its opposite(negative/positive)
                 console.log(!true); //output will be = false


            // Nullish Coalescing Operator(??): if 1st value is Null / Undefined then it will
                    // return 2nd value , otherwise it will return the 1st one.
                    console.log(true ?? false); // output = true;
                    console.log(null ?? undefined); // output = undefined;
                    console.log("Amit" ?? undefined); // output = Amit;


            // Conditional (ternary) Operators: There will be a Condition, if the condition is
                // true, then it will return 1st value otherwise return 2nd value.

                // Rule:  condition ? value1 : value2
                let carCost = 450000000;
                const l = carCost > 400000000 ? "Rich Guy" : "Middle Family Guy";
                console.log(l); // output = Rich Guy


    // 5. Bitwise Operators: (&, |, ^, ~, <<, >>) those are Bitwise operators.

            /* Binary to Decimal and Decimal to Binary
            15 & 9 = ........let's see the result

            15 / 2 = 7 (1) // 1 as remainder 
            7 / 2 = 3 ( 1) // 1 as remainder
            3 / 2 = 1 ( 1) // 1 as remainder
            result = 1111
            
            9 / 2 = 4 (1) // 1 as remainder
            4 / 2 = 2 (0) // 0 as remainder
            2 / 2 = 1 (0) // 0 as remainder
            result = 1001

            Binary Output = 15 & 9 = 1111 & 1001 = 1001 = output 9

            NB: calculation = 1*(2**0) + 0*(2**1) + 0*(2**2) + 1*(2**3)
                            = 1 + 0 + 0 + 8
            // */


            // Bitwise AND(&) : Sets a bit if both corresponding bits are 1.
                const h1 = 5;  // 0101
                const h2 = 3;  // 0011
                const result = h1 & h2; // 0001 (1 in decimal)
                
            // Bitwise OR(|) : Sets a bit if at least one corresponding bit is 1.
                const i1 = 5;  // 0101
                const i2 = 3;  // 0011
                const result1 = i1 | i2; // 0111 (7 in decimal)

            // XOR(^) : Sets a bit if corresponding bits are different
                const a0 = 5;   // 0101
                const a1 = 3;   // 0011
                const result2 = a0 ^ a1; // 0110 (6 in decimal)

            // NOT(~) : flip all bits(1 becomes 0, 0 becomes 1)
                const c1 = 5;   // 0101
                const result3 = ~c1; // 1010 (in two’s complement: -6)

            // Left Shift(<<) : Shifts bits to the left, filling with 0.
                        // Equivalent to multiplying by 2^n.
                const a5 = 5;   // 0101
                const result4 = a5 << 1; // 1010 (10 in decimal)

            // Right Shift(>>) : Shifts bits to the right.
            // For signed numbers, it depends on the language 
            // (logical or arithmetic shift).Equivalent to dividing by 2^n.
                const a6 = 5;   // 0101
                const result6 = a6 >> 1; // 0010 (2 in decimal)

    
    // 6. Relational Operators: We will learn about this when we will learn deeply
                    // about OBJECT. But we will never use it in Object.
            // Rules: There is an in-keyword , Using properties to check the keyword
                    // is in the object or not.

    
    // 7. Group Operators: This will follow the rule for HIGHER PRECEDENCE.

                const p = 2;
                const q = 3;
                const r = 4;
                console.log(p * q + r); // output 2 * 3 + 4 = 10
                // another(precedence)
                console.log(p * (q + r)); // output 2 * (3 + 4) = 14
            /* here, () parenthesis has higher precedence than arithmetic operators */

    
    // 8 . typeOf : We can check the operand values Data Type by typeOf
            console.log(typeof 3); // Number
            console.log(typeof "Amit"); // String
            console.log(typeof true); // Boolean
            console.log(typeof null); // Null is an Object
            console.log(typeof undefined); // Undefined
            const abc = {
                name: 'Amit',
                age: 28
            }
            console.log(typeof abc); // object
            console.log(typeof [true]); // Array is also an object
            const arr = [3, 6, 9];
            console.log(Array.isArray(arr)); // true
            // if we want to get array with typeof, this it the method and it will return a Boolean value.
            function abcd(){
                console.log('function');
            }
            console.log(typeof abcd); // function
            const ok = BigInt(354746549878549874984);
            console.log(typeof ok); // bigint

    // 9 . instanceof : If a particular object is instanceof a particular objectType then it will
                    // true, otherwise it will return false.
                    const car = {name: 'BMW'};
                    // if this car is instanceof a carTypeObject then it will return true, otherwise false.