
// fiboncci series
//  0 1 1 2 3 5 8
// let output = [0,1,1,2,3,4,5,8];
// function fibonacciGenerator(n){

//     for(let i = 0 ;i<n;i++){
        
//         console.log(output[i]);
//         console.log(typeof(output));
//     }
 
// }
// fibonacciGenerator(7);

let output = [];
let count = 0;
function getNumber(){
    for(let i = 0 ; i<10;i++){
    output[i] = count;
output[i+i] = count;
output[i] = output[i-1] + output[i-i];
        count++;
        console.log(output);   
    }
    //  output[0] = 0;
    //  output[1] = 1;
    //  console.log(output);
}
getNumber();