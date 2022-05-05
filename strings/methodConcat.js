var yourName = prompt("what is your name");
alert(yourName);

// alert("Hello " +" " + " world ");
var message = "Hello";
var Uname = "Hello world";
// alert (message + " " + Uname);

// to know the length of the string
console.log(Uname.length);
document.write(message.length);
document.write(message.toLocaleLowerCase());
document.write(message.toUpperCase());

message = message.includes("El");
document.write(message);
document.write(Uname.startsWith("R"));
document.write(Uname.endsWith("I"));
document.write(Uname.search("x"));
document.write(Uname.indexOf("r"));
let UNAME = Uname.lastIndexOf("world");
document.write(UNAME);


// Array
// array declaration
// array index value start from 0 
let cars = ["honda","kia","ford"];
cars.push("hyundai");
cars.shift("nissane");
document.write("<h1>"+cars+"</h2>");
document.write("<h1>"+cars[0] +"</h1>");
// document.write(cars.length)
// accessing array values
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
for(let i = 0; i< cars.length; i++){
    // console.log(cars[i]);
    document.write(cars[i] + " " );
}
cars.pop();
cars.unshift();
for(let i = 0; i< cars.length; i++){
    // console.log(cars[i]);
    document.write(cars[i] + " " );
}
// another way of array declaration
// var fruits = new Array("banana","strawberry","mango")
// for(let i = 0;i<3;i++){
//     document.write(fruits[i]+" ");
// }

// forEach 
// forEach takes function as an argument
// forEach() calls a function for each element in an array:
let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(displayTables);
function displayTables(item,index,arr){
    arr[index] = item * 2;
    console.log(arr[index]);
}

let cities = ["mysore","bangalore","shimoga"];
cities.forEach(displayCity);
function displayCity(item,index,arr){
    arr[index] = item ;
    document.write(arr[index] + " ");
}

let designations = ["frontend","backend","android","wordpress"];
designations.forEach(displayDesignation);
function displayDesignation(item,index,arr){
    arr[index] = item + " developer ";
    console.log(arr[index]);
}

let items = ["item1","item2","item3"];
let copyItems = [];
items.forEach(copyItemss);
function copyItemss(item,index,copyItems){
    copyItems[index].push = item;
    console.log(copyItems[index]);
}

let groceries = ["bread","biscuits","maggie","jam"];
let buy = [];
document.write("your shopping list : ");
groceries.forEach(purchase);
function purchase(grocery,index,buy){
buy[index].push = grocery;
document.write( buy[index] + " ");
console.log(buy[index]);
}

// ************
function purchaseList(){
    // let item1 = document.getElementById("bread");
    
    // let item2 = document.getElementById("biscuits");
    // let item3 = document.getElementById("maggie");
    // let item4 = document.getElementById("jam");
    // console.log(document.getElementsByClassName("item"));
    let item1 = document.getElementsByClassName("item");
    console.log(item1);
    let shoppingCart = [];
    // console.log(item1);
    // item1.forEach(buy);
    // function buy(item,index,shoppingCart){
    //     shoppingCart[index].push = item;
    //     if(item1[i].checked == true){
    //         alert("item selected");
    //      }
    // }
   
   
    
//     let shoppingCart = [];
//     item1.forEach(shoppingList);
//     function shoppingList(item,index,shoppingCart)
//     {
//         shoppingCart[index].push = item;
// console.log(shoppingCart[index]);
//     }
   
}

let longitude = "12.3382043,76.6187418";
longitude = longitude.slice(0,11);
console.log(longitude);