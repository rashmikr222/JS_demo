// > find the index of the element
// > and returning that element based on that index
let displayProduct = function (itemLists, price) {
    // console.log(price);
    let index = itemLists.findIndex(function (product) {
        return product;
    })
    if (index > -1) {
        let isItem = itemLists.find(function (product) {
            return product;
        })
        console.log(isItem);
        let tableRow = document.createElement('tr');
        // tableRow.innerHTML = price;
        document.querySelector('body').appendChild(tableRow)
    }
    console.log("index value", index);
}
displayProduct(itemLists, 12);