let result = document.getElementById('result');
let symbol = document.getElementById('symbols');
console.log(result);
result.innerHTML
let buttons = document.querySelectorAll('.operator');
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // console.log(this);
        let buttonInnerText = this.innerHTML;
        symbol.innerHTML = buttonInnerText
        // operator(buttonInnerText)
    })

})

let numbers = document.querySelectorAll('.operand');
numbers.forEach(function (operator) {
    operator.addEventListener('click', function (e) {
        // console.log(this);
        let operandText = this.innerHTML;
        // operand(this.innerHTML)
        result.innerHTML = operandText
    })
})

document.addEventListener('keypress', function (e) {
    console.log(e.key);
    // operator(e.key)
    operand(e.key)
})
function operand(key) {
    switch (key) {
        case "0":
            result.innerHTML = key    
        console.log("valid operand");
            
            break;
        case '1':
            console.log("valid operand");
            break;
        case '2':
            console.log("valid operand");
            break;
        case '3':
            console.log("valid operand");
            break;
        case '4':
            console.log("valid operand");
            break;
        case '5':
            console.log("valid operand");
            break;
        case '6':
            console.log("valid operand");
            break;
        case '7':
            console.log("valid operand");
            break;
        case '8':
            console.log("valid operand");
            break;
        case '9':
            console.log("valid operand");
            break;
        default: console.log("please enter a valid operand");
            break;
    }
}

function operator(key) {
    switch (key) {
        case '+':
            add();
            break;
        case '-':
            sub();
            break;
        case '*':
            mul();
            break;
        case '/':
            div();
            break;
        default: alert("please enter a proper input");
            break;
    }
}

let add = () => {
    alert("add activated");
}