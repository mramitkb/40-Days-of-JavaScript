
// 1. Explain Temporal Dead Zone by creating 3 variables in side a block.

{
    console.log("Temporal Dead Zone Starts here");
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    // const d = a + b; //
    // console.log(a);
    // const e = b + c
    // console.log(b);
    // const f = a + c;
    let a = 10;
    let b = 20;
    let c = 30;
    console.log(a + b + c);
    // console.log(d + e + f); // if we uncomment the above lines, we will get the output.
}

/*
    In the above code, we declared three variables a, b and c. We know that,
    Temporal Dead ZOne is starts from the beginning of the block and ends 
    at the variable's that we are trying to access which is declared with value.

    1. So, TDZ of variable c is started from line no 11 and ends at line no 21.
       And we are trying to access it in line no 12(ReferenceError)
    N:B: Same goes for variable b, a and d/e/f where a,b,c are added to get result.
*/


// 2. Explain Variable and Function Hoisting with Example.

  // Variable Hoisting
    console.log(withVar);
    var withVar = "1st Variable";
    console.log(withVar);
    /**
     * GEC: CP: withVar = undefined
            EP: undefined
                withVar = "1st Variable"
                1st Variable
     */
    // console.log(withLet); 
    let withLet = "2nd Variable";
    console.log(withLet);
    /**
     * GEC: CP: withLet = defined as it is(not undefined)
            EP: ReferenceError: Cannot access 'withLet' before initialization
            because of TDZ
     */
    // console.log(withConst);
    const withConst = "3rd Variable";
    console.log(withConst);
    /**
     * GEC: CP: withConst = defined as it is(not undefined)
            EP: ReferenceError: Cannot access 'withConst' before initialization
            because of TDZ
     */

  // Function Hoisting

    hoistedFunc1();
    function hoistedFunc1() {
        console.log("Here I am.");
        function hoistedFunc2() {
            console.log("Here You are.");
        }
        hoistedFunc2();
    }

    /**
     * GEC: CP: hoistedFunc1() - created in memory(in heap with reference) from 62 no line
                
            EP: FEC: hoistedFunc1()
                    CP: hoistedFunc2() - created in memory(in heap with reference) from 64 no line
                    EP: "Here I am." (line no 63)
                        FEC: hoistedFunc2() - line no 67
                        CP: nothing
                        EP: "Here You are." (line no 65)
     */