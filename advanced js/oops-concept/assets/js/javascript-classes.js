// defining class 
class Person {
    // person constructor written here
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes
    }
    // we define the methods here
    getBio(){
        let bio = `${this.firstName} is ${this.age}. \n`
        this.likes.forEach((like)=>{
            bio += `${this.firstName} likes ${like} `
        })
        return bio;
    }
    setName(fullName){
        // console.log("full-name",fullName);
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
        return this.firstName
    }
}

// creating sub classes -> inheritance 
// here employee class inherits from thr person class 
// employee clas can have its own constructor,properties and methods
class Employee extends Person{
constructor(firstName, lastName, age,position, likes = []){
    // we have to use super() to access parent class property
    // inside super we pass all the parent class properties
    super(firstName,lastName,age,likes);
    this.position = position
}
// here we are overriding parent method
getBio(){
    let bio = `${this.firstName} is an ${this.position}. \n`
    return bio;
}
getYearsLeft(){
    return 50 - this.age
}
}

// accessing 
const myPerson = new Employee("rakshith","shetty",34,"actor",["movie-making"]);
// the constructor function is called automatically
console.log("my person", myPerson);
// to access methods inside the class
console.log(myPerson.getBio());
console.log(myPerson.setName("rakshit shetty"));
console.log(myPerson.getYearsLeft());
// how to define methods for the class
// we define methods inside the class below the end of the constructo method