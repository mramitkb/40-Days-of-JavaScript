/** Execution Context
 * 1. Lexical Environment
 * 2. Execution Context
 * 3. Global Execution Context(GEC)
 * 4. Function Execution Context(FEC)
 * 5. GEC and FEC
 * 6. Memory Management and Garbage Collection(Stack and Heap)
 */

/* 1. Lexical Environment : Lexical Environment is like the codes that
    in the js file stay as it is(how and where its physically placed).*/

/* 2. Execution Context : Execution Context means the codes that we are running and
    everything surrounding the codes are helping to run it. */

/* 3. Global Execution Context(GEC) : GEC is the first execution context that is created when the js file is loaded.
    even if there isn't any line of code. But it has some faces, like...
    Creation face:
    1. window object is created.
    2. this keyword is created.
    3. window === this (are the same object).
    4. allocate memory for variable and function.
    5. variable will be stored as undefined.
    6. function body will be placed directly in the memory.

    Execution face:
    1. code will be executed line by line.
    2. variable will be assign to the value.
    3. function will be executed if there is any function call.
    N:B: if there is a function call, GEC process will be paused and FEC
         will be created.
    */
   
/* 4. Function Execution Context(FEC) : When a function appears in the GEC and invoked the function.
    it will create a new context called FEC and there will be new GEC to execute some process like...
    
    Creation face:
    1. variable and function will be created in the memory.
    2. variable will be stored as undefined.

    Execution face:
    1. variable name will be assigned to the value.
    2. function will be executed line by line.
    N:B: if there is another function called inside the FEC, it will create another FEC.
         like this...
         GEC of the particular function:
         creation face: 
            1. variable and function will be created in the memory.
            2. variable will be stored as undefined.
         execution face:
            1. variable name will be assigned to the value.
            2. function will be executed line by line.
        N:B: those will be the same process as the GEC and FEC.
    */