// 1. Odd or Even?
let num = 99;
if(num * 2 === 0){
    console.log(num, "Even");
}
else {
    console.log(num, "Odd");
}

// 2. Do you have a Driving License?
const age = 28;
if(age >= 18) {
    console.log('Eligible for Driving License.');
}
else {
    console.log('Not Eligible(Under 18).');
}

// 3. Calculate CTC with a Bonus
const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const annualSalaryBonus = (annualSalary * 20) / 100;
const CTC = annualSalary + annualSalaryBonus; // CTC in a year
console.log(CTC);

// 4. Write a program for the Traffic Light Simulation
const red = "STOP";
const green = "GO";
if(red === "STOP") {
    console.log("Red Light.");
}
else{
    console.log("Green Light.");
}

// 5. Create an Electricity Bill Calculator
const units = 5;
const cost = 150;
const monthly = cost * units;
console.log(monthly); // per month
const annual = monthly * 12;
const annualDiscount = (annual * 20) / 100;
const annualCharge = annual - annualDiscount; // annual after discount
console.log(annualCharge);

// 6. Leap Year Checker
const year = 2025;
    // arithmetic
if(year % 4 === 0) {
    console.log("Leap Year.");
}
else{
    console.log("Not a Leap Year.");
}
    // ternary
year % 4 === 0 ? console.log("Leap Year.") : console.log("Not a Leap Year.");


// 7. Max of Three Numbers
const p = 443554;
const q = 779484;
const r = 93534;
if(p > q && p > r) {
    console.log('P');
}
else if(q > r){
    console.log('Q');
}
else{
    console.log("R");
}

// 8. Bitwise Doubling
const count = 5;
const double = count << 1;
console.log(double);
const double1 = count * (2 ^ 0); // another tricky way
console.log(double1);