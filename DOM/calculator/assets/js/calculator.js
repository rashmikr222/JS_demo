
let operators = document.querySelectorAll(".operator");
console.log("operator",operators);
operators.forEach(function(operator){
    operator.addEventListener('click',function(e){
        let buttonInnerText = this.innerHTML;
        switch (buttonInnerText) {
            case '+':
                add(num1,num2)                
                break;
        case '-':
            let sub = new Operand(4,6,sub);
            sub.calculate();
            break;
            case 'X':
                let mul = new Operand(8,9,mul)
                mul.calculate();
                break;
                case '/':
                    let div = new Operand(20,2,div)
                    div.calculate();
                    break;
            default: console.log("not a function");
                break;
        }
    })
})

let calculate =  function (num1,num2,operator)
{
    return operator(num1,num2);
}
console.log("result",calculate);
function add(num1,num2){
 return num1 + num2
}
function sub(num1,num2){
    return num1 - num2
    }
    function mul(num1,num2){
        return num1 * num2
        }
        function  div(num1,num2){
            return num1 / num2
            }