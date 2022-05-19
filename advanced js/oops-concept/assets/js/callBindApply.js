
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

console.log(add.call(obj, 3, 5));

// apply
// apply method is similar to call but apply method takes arrays 
console.log(add.apply(obj, [10, 5]));

// 
const func = add.bind(obj, 15, 5);
console.log(func());