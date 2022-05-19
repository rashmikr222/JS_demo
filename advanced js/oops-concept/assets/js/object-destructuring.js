// object
const employee = {
    id : 1,
    name:"rashmi",
    address:{
    city:"mysore",
    country:"india"
    } 
};

// Object propert access method 1
console.log(employee.id);
console.log(employee.name);

// object property access method 2
let employeeAddress = employee.address;
console.log(employeeAddress);

// object destructuring

// const {id,name,address} = employee;
// here we are using the property name directly
// console.log(id);
// console.log(name);
// console.log(address);

// we can also give another name for the object property 
const {address:empAddress} = employee;
// we can use the new propert-name for accessing the object property
console.log(empAddress);

// we can also give the deafault value to the properties
const {id:empId = 001} = employee;
console.log(empId);

// object destructuring inside a function
function displayEmployee({name,address:{city}}){
    return `the employee name is ${name} and from ${city}`
}
console.log(displayEmployee(employee));