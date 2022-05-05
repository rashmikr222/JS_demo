let todos = ["preparing breakfast","cleaning","buying groceries"];
console.log(`you have ${todos.length} todos `);
console.log(`Todo : ${todos[todos.length-1]}` ); //give 1st last element
console.log("last 2nd element of the array",todos[todos.length-2]); //give 2nd last element

console.log(todos);

// 2nd challenge
// todos = todos.splice(2,1)
// console.log( "array after splicing " ,todos); //delete 3rd item
// todos = todos.shift(); //remove 1st element from an array
// console.log(todos);
//  todos = todos.push("washing the car");
// console.log("push result ",todos); //add item at the end of an array
// console.log(todos);

//third challenge
const listOfItems = function (item,index){
    const indexPosition = index + 1;
    console.log(`${indexPosition}. ${item}`);
    }
    
todos.forEach(listOfItems);
console.log(todos.length);

for(let count = 2 ; count>=0  ;count-- )
{
    console.log("count",count);
 console.log("the array elements " , todos[count]);   
}

// print from the 3rd index 
for(let count = todos.length-1 ; count>=0 ;count--  ){
    console.log("count", count);
    console.log("the array elements " , todos[count] ); 
      
}


// 