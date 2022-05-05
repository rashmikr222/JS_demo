let employeeLists = ["balu", "rashmi", "vinutha", "kiran"];
let employeeName = prompt("What is your name ?");
console.log("is the", employeeName, "present in the employee list", employeeLists.includes(employeeName));
if (employeeLists.includes(employeeName)) {
    console.log("congratulation !");
}
else {
    console.log("Please attend interview");
}

