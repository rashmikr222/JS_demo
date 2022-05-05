// let noOfguest = prompt("Enter the guest capacity");
// let restaurant = {
//     name : "by the way",
//     guestCapacity:200,
//     guestCount:0,
//     checkAvailability:function(noOfguest){
//         if(noOfguest<=this.guestCapacity){
//             console.log(`available`);
//         }
//         else{
//             console.log(`${this.name} has ${this.guestCapacity} exceed the capacity`);
//         }
//     }
// }
// restaurant.checkAvailability(noOfguest);

let person4 = {
    name : "rajeshwari",
    age : 25,
    city:"mysore",
    // checkavailability:function(name){
    //     if (this.name === name){
    //         console.log("yes");
    //     }else{
    //         console.log("no");
    //     }
    // }
    }

    function getName(){
        return{
            firstName: "rashmi",
            lastName: "K.R"
        }
    }

    let personname = getName();
console.log("this is first name",personname);
console.log(personname.age);
    // function getName(person){
    //     console.log(`The name is ${person.name}`);
    // }
    console.log("t");
    console.log(getName(person4));
    /* access */
    console.log(person4.name);
    console.log(person4["age"]);
// console.log(person4.checkavailability("rashmi"));
    // methods


    // user has a reference to the object
let user = {
    name: "John"
  };
  
  let admin = user;
  console.log("this is admin",admin);
  delete user.name;
  console.log("this is user",user);
  