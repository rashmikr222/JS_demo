// constructor 
function Person(name,city,numberOfYears){
this.name = name;
this.city = city;
this.numberOfYears = numberOfYears
}
// adding new method to the constructor
// object name.prototype. 
Person.prototype.getSummary = function(){
    return `${this.name} from ${this.city}`
};
Person.prototype.getTotalNumberOfYears = function(){
    const years = new Date().getFullYear() - this.numberOfYears;
    return `${this.name} is staying in ${this.city} for ${years} years`
}
// adding new property to the constructor
Person.prototype.country = "india";
// creating object 
const person1 = new Person("rashmi","mysore",'2019');
console.log(person1.country);
console.log(person1.getTotalNumberOfYears());



// another example 
function Employee(ename,eid,year){
this.ename = ename;
this.eid = eid;
this.year =year;
}

Employee.prototype.cName = 'dollar bird';
// prototype
Employee.prototype.getTotalYear = function(){
    const totalYear = new Date().getFullYear()-this.year;
    return `${this.ename} is working in ${this.cName} for ${totalYear}`;
}


const employee1 = new Employee('rashmi','DB414','2020'); 
console.log(employee1.getTotalYear());