
// here we have multiple collections of data
let employee1 = {
    name : "Bala Krishna",
    designation: "frontend developer",
    experience: 1
}

let employee2 = {
    name : "suhel",
    designation:"React Native developer",
    experience:2
}
// passing object from a function
// function getEmployeeDetails(employee){
//     console.log(`${employee.name} is working as ${employee.designation}`);
// }
// getEmployeeDetails(employee1);
// getEmployeeDetails(employee2);

// return object from a function
function getEmployeeDetails(employee){
    return {
          employeePersonalDetail : `Name ${employee.name} and Designation ${employee.designation}`,
        employeeExperience :`${employee.experience} experiences`
    }
  
}
let employeeDetail = getEmployeeDetails(employee1);
let anotherEmployeeDetail = getEmployeeDetails(employee2);
console.log(employeeDetail.employeePersonalDetail);
console.log(employeeDetail.employeeExperience);

// object reference
