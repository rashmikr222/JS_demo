// array of item list 
let itemLists = [
    {
        id: 1,
        productTitle: "maggie",
        price: 12,
        quantity: 1
    },
    {
        id: 2,
        productTitle: "good day",
        price: 10,
        quantity: 1
    },
    {
        id: 3,
        productTitle: "puliyogre powder",
        price: 10,
        quantity: 1
    }
]
function getElement(itemLists, itemId) {
    console.log("item id ", itemId);
    let itemIndex = itemLists.findIndex(function (item, index) {
        return index === itemId
    })
    if (itemIndex > -1) {
        console.log("hello world");
    } else {
        console.log("now executing else");
    }
}
getElement(itemLists, 1)
let myProduct = document.querySelector('.myProduct');
let productLst = itemLists.map(function (product, index) {

    return `
<div class="col-md-3" id="product-list">
<p>${product.id}</p>
</div>  
<div class="col-md-3">
<p>${product.productTitle}</p>
</div>
<div class="col-md-3">
<button class="btn btn-danger  decrement count-button " onclick = "decrement()" >-</button>
        <button id='${product.id}'  class="btn btn-danger  result count-button">${product.quantity}</button>
        <button class="btn btn-danger  increment count-button" onclick = "increment(${product.id},${product.quantity},${product.price})">+</button>
</div>
<div class="col-md-3" id="price-element">
<p class="price" id='${index + 1}'>${product.price}</p>
</div>`
}).join('')

myProduct.innerHTML = productLst;

let result = document.querySelector('.result');
let productPrice = document.querySelector('.price');
let finalValue = document.querySelector('.total');
// let amount = 12;


function increment(id, quantity, price) {
    console.log("price", price);

    itemLists.map((item, index) => {
        if (item.id === id) {
            item.quantity = item.quantity + 1;

            console.log("item price", item.price);
            const ele = document.getElementById(id);
            ele.innerHTML = item.quantity;
            let last = document.getElementById('price-element');
            console.log(last.lastElementChild.className);
            // last.lastElementChild.className.innerHTML = item.price * item.quantity
            productPrice.innerHTML = item.price * item.quantity;

        }
    })
}

function decrement() {
    if (count >= 1) {
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



