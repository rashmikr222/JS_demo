
// filter 
let numbers = [1,2,3,4,5,6];
let even = numbers.filter(getFilter)
console.log(even);
document.write(even);

function getFilter(numbers){
if(numbers%2===0){
   
return numbers;
}
}

