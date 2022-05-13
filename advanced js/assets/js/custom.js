// array of item list 
let itemLists = [
    {
        id: 1,
        productTitle: "maggie",
        price: 12
    },
    {
        id: 2,
        productTitle: "good day",
        price: 10
    },
    {
        id: 3,
        productTitle: "puliyogre powder",
        price: 10
    }
]
function getElement(itemLists,itemId){
    console.log("item id ",itemId);
    let itemIndex = itemLists.findIndex(function(item,index){
        return index === itemId
    })
    if(itemIndex>-1){
        console.log("hello world");
    }else{
        console.log("now executing else");
    }
}
getElement(itemLists,1)
let myProduct = document.querySelector('.myProduct');
let productLst = itemLists.map(function(product){
return `
<div class="col-md-3">
<p>${product.id}</p>
</div>  
<div class="col-md-3">
<p>${product.productTitle}</p>
</div>
<div class="col-md-3">
<button class="btn btn-danger  decrement count-button ">-</button>
        <button class="btn btn-danger  result count-button">1</button>
        <button class="btn btn-danger  increment count-button">+</button>
</div>
<div class="col-md-3">
<p class="price">${product.price}</p>
</div>` 
}).join('')

myProduct.innerHTML = productLst;

let count = 0;

let result = document.querySelector('.result');
let price = document.querySelector('.price');
let finalValue = document.querySelector('.total');
let amount = 12;



let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e.target);
        let currentTargetElement = e.target.classList[2];
        if (currentTargetElement == "increment") {
            count = count + 1;
            
            increment();
        }
        if (currentTargetElement == "decrement") {
            count = count - 1;
            decrement();
            
        }
    })
})
function increment() {

        if (count > 1) {
            result.innerHTML = count;
            price.innerHTML = amount * count
            total = amount * count
            finalValue.innerHTML = total;
        }
    
    
    
}
function decrement() {
    if (count >=1 ) {
        result.innerHTML = count;
        price.innerHTML = amount * count
        total = amount * count
        finalValue.innerHTML = total;
        
    }
}



// ************ map example
// const numbers = [1,2,3,4,5];
// let results = numbers.map(function(number){
//     return number * 2;
// })
// console.log("results",results);



