// Array
const fruits = ["apple","mango","banana","pineapple"];

// array destructuring
// const [fruit1,fruit2]  = fruits

// here fruit1 refers to the 1st array element
// fruit2 refers to 2nd array element
// console.log(fruit1);

// if we dont want 1st and the 2nd array elements then we can skip the reference 
// const [, ,fruit3,fruit4] = fruits
// console.log(fruit3);

// we can also use rest operator inside the array destructuring

const [fruit1,fruit2 , ...fruit] = fruits;
console.log(fruit);