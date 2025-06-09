# Day 12: Mastering JavaScript Object


## Task 1: What will be the output and why?
```js
const user = { name: "Alex", age: undefined};
console.log(user.age ?? "Not provided");
```
#### Explanation 1: 
    `user` object has age as `undefined and we see that there is 
    a  `Nullish Coalescing = ??` operator for output. This `??` operator will 
    check the condition that, there is any `null` or `undefined`. If yes, it will
    return the right sides operand.
    So, Output will be = `Not provided`



## Task 2: What will happen if we try to modify a frozen object?
```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```
#### Explanation 2:
    If we want to try modify this object, we can't be able to do it.
    Because `Object.freeze` means it will freeze the whole object and we can't able to
    change any key-value or add new ones.
    So, Output will be = `1`



## Task 3: Given an object with deeply nested properties, extract name, company, and address.city using destructuring
```js
const person1 = {
  name1: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```
#### Destructuring 3: 
```js
const {name1, company:{name: companyName, location:{city, zip}},} = person1;
console.log(`I'm ${name1}, founder of "${companyName}" in ${city}(${zip})`);
```


## Task 4: Build a Student Management System
    - Store student details in an object (name, age, grades).
    - Implement a method to calculate the average grade.
```js
const student = {
    stuName: "Amit", 
    age: 28,
    grades: [88, 94, 85, 99, 95, 84]
}
const {stuName, age} = student;
let avgGrade = 0;
for (let grade of student.grades) {
    // calculate the average
    avgGrade += grade;
}
const calculate = avgGrade / student.grades.length;
const point2 = calculate.toFixed(2);
const average = parseFloat(point2)
console.log(`${stuName}'s average grade is ${average}`); // Average is 90.83
```


## Task 5: Book Store Inventory System 
    - Store books in an object.
    - Add functionality to check availability and restock books.
```js
const bookStore = {
    "Self Help" : {
        name : "Atomic Habits",
        author : "James Clear",
        year : 2018,
        quantity : 5
    },
    "Money" : {
        name : "The Psychology of Money",
        author : "Morgan Housel",
        year : 2020,
        quantity : 2
    },
    "Invest" : {
        name : "The Intelligent Investor",
        author : "Benjamin Graham",
        year : 1949,
        quantity : 4
    },
    isAvailable : function(bookId) {
        if (this[bookId]?.quantity > 0) {
            console.log(`${bookId} is available.`);
        } else {
            console.log(`Unfortunately "${bookId}" is not available.`);
        }
    },
    restockBook : function(bookId, quantity = 0) {
        if(this[bookId]) {
            this[bookId].quantity += quantity;
        } else {
            console.log(`${bookId} wasn't here before. Please add ${bookId} first. Thanks!`);
        }
    }
};
bookStore.isAvailable("Self Help");
bookStore.restockBook("Money", 10);

console.log(bookStore["Self Help"]); // same as key-value.
console.log(bookStore["Money"]); // quantity: 12
```


## Task 6: What is the difference between Object.keys() and Object.entries()? Explain with examples

#### Explanation 6:

    Object.keys(): Object.keys() will give us `an Array of Keys` from an object.
    There we will get all the keys from the object in an Array. On the other hand,
   
    Object.entries(): Object.entries() will give us `All the key-values in different Arrays` from an Object



## Task 7: How do you check if an object has a certain property?
```js
const property = {
    banglo: 2,
    bike: 1,
    car: 2,
    company: 1
}
console.log("company" in property); // true
console.log("country" in property); // false
```
#### Explanation 7:
    With `in` operator for an Object, we can find is there has any
    property or not which I'm looking for. If yes, Output will be `true` otherwise `false`.



## Task 8: What will be the output and why?
```js
const person2 = { name: "John" };
const newPerson = person2;
newPerson.name = "Doe";
console.log(person2.name); // "Doe"
```
#### Explanation 8:
    `person2` and `newPerson` is the same object(with reference value)
    So, 3rd line we are changing the `name` key value for newPerson variable. 2nd line, 
    newPerson = person2 (same value). That's why `person2.name`'s
    output will be `Doe`.



## Task 9: What’s the best way to deeply copy a nested object? Explain with examples
```js
const shallow = {
    a: 3,
    b: {c:10}
}
const shallow2 = Object.assign({}, shallow);
shallow2.a = 300;
shallow2.b.c = 1000;

console.log(shallow); // a = 3, b.c = 1000
console.log(shallow2); // a = 300, b.c = 1000
```

#### Shallow copy:
    When we are dealing object with Object.assign(), there will be different
    references for every object but nested object's will be the same reference. So, if we
    change the normal keys value, there will be another new reference and previous value won't be
    changed. But nested objects from the parent object will be change for their reference.

```js
const deep = {
    d: 40,
    e: {f: 50}
}
const deep2 = structuredClone(deep);
deep2.d = 444;
deep2.e.f = 333

console.log(deep); // d = 40, e.f = 50
console.log(deep2); // d = 444, e.f = 333
```
#### Structured Clone(Deep Copy):
    When we are doing a deep copy an Object with Structured Clone,
    There will be completely different references for the object, even the nested object also.
    So, after deep cloning the previous object, we can change the key/value of cloned one but it 
    won't be affect the previous object to change anything. So, we should use structured clone
    for deep cloning.


## Task 10: Loop and print values using Object destructuring
```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
// values with Object destructuring
for (let {name, address, age} of users) {
    console.log(name, address, age);
}
```