const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
}

const {name, age, parents} = student;
// new key+value add
console.log(name, age, meal = "bread");

const {subjects, allSubject = subjects.length} = student;

// Aliases
const {std: three} = student;
console.log(three);


// nested object destructuring
const {address: {street, city, zip}, parents: {email}} = student
console.log(zip, email);

// Destructuring from function parameter
function destructuringParam({parents: {email}}) {
  console.log("Send an E-mail to", email);
}
destructuringParam(student);

// Object destructuring with arrow function
const getStudent = () => {
  return {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
  }
}

const {subjects: sub, age: ag} = getStudent();
console.log(aub = sub.length, ag);

// Destructuring array with for of loop

const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
];
for (let {name, grade} of students) {
  console.log(name, grade);
}
// Optional Chaining

const employee = {
  salary: {
    bonus: 300
  }
}
console.log(employee.salary.bonus); // 300

// console.log(employee.salary.bonus.name.ok); // cannot read properties of undefined

console.log(employee.salary.bonus.name?.ok); // undefined