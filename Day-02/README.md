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

<!-- Type of Values -->
There are two types of value.
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