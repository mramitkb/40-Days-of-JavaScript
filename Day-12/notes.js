// Object create, access and delete
const user = {
    name: "Amit",
    age: 28,
    isMarried: false
}
console.log(user);
user.programmer = true;
console.log(user);
user.isSingle = false;
user.isMarried = true;
console.log(user);
user["series lover"] = true;
delete user.isSingle;
console.log(user);

// Dynamic key for an Object
// let carName = prompt("Type your desire Car Name to become in reality.");
// const details = {
//     [carName]: 5
// }
// console.log(details);

// Constructor Function
function Car(name, model) {
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1B");
const porscheCar = new Car("Porsche", "P10");
console.log(bmwCar);
console.log(porscheCar);

let profile = {
    name: "Amit",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}.`);
    },
    address: { // Nested Object
        city: "Narayanganj",
        "post-code": 1421,
        state: "Dhaka",
        country: "Bangladesh"
    },
    salary: "5000 EUROS"
}
console.log("salary" in profile); // "in" operator
if(!profile.salary) {
    console.log("Salary doesn't exist!");
}
profile.message();
console.log(profile.address.city);


// for in loop
for(const key in profile) {
    console.log(key, profile[key]);
}

// Object.keys : To store all the key in an Array
console.log(Object.keys(profile));

// object references
let player = { name: "Messi", jersey: 10};
const footballer = { name: "Messi", jersey: 10};
player = footballer;
console.log(player === footballer);

// Object.assign() to clone

const target = {m:10, n:20};
const source = {n:30, o: 40};
console.log(Object.assign(target, source));

const obj1 = {name: "js"};
const obj2 = Object.assign({}, obj1);
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);


const obj3 = {
    a: 1,
    b: {c:3}
}
const obj4 = Object.assign({}, obj3);

obj4.b.c = 1111;
console.log(obj3.b);
console.log(obj3); // Objects nested child always copy the references from heap
console.log(obj4);


// Structure clone(Object deep cloning)
const obj5 = structuredClone( obj3);

obj5.a = 333;
obj5.b.c = 999;

console.log(obj3.a); // 1
console.log(obj5.a); // 333

console.log(obj3.b.c); // 1111
console.log(obj5.b.c); // 999


// Object.entries() for transform them in an Array

const myDetails = {
    name: "Amit",
    age: 28
}
const my = Object.entries(myDetails);
console.log(my);

// Object.fromEntries() for transform them into Objects from Array

const entries = new Object([
    ["fruit", "mango"],
    ["flower", "rose"]
])
console.log(entries); // array
console.log(Object.fromEntries(entries)); // object

// Object.freeze() : You can't change after freezing even can't add new key/value.
const employee = {
    salary : 3000
}
Object.freeze(employee); // now objects key/value can't be changed
employee.salary = 3;
employee.name = "Messi" // 
console.log(employee); // 3000

// Object.isFrozen()
console.log(Object.isFrozen(employee)); // true


// Object.seal() : can't add or remove anything from here but can change the value

const subject = {
    name: "Physics"
}
console.log(Object.seal(subject));
delete subject;
subject.year = 2025;
subject.name = "CSE"; // can change the keys value
console.log(subject); 

