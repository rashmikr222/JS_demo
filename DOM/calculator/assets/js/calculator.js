let operators = document.querySelectorAll(".operator");
console.log("operator",operators);
operators.forEach(function(operator){
    operator.addEventListener('click',function(e){
        let currentTargetproperty = e.target.classList[4];
        console.log(e.target.classList[4]);
        if(currentTargetproperty == "addition"){
            add();
        }
        if(currentTargetproperty == "substraction"){
            sub();
        }
        if(currentTargetproperty == "multiplication"){
            mul();
        }
        if(currentTargetproperty == "division"){
            div();
        }
    })
})

function add(){
alert("addition")
}
function sub(){
    alert("substraction")
    }
    function mul(){
        alert("multiplication")
        }
        function  div(){
            alert("division")
            }