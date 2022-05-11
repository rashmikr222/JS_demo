let colors = [];

let setBackground = document.querySelector('#set-background');
let text = document.querySelector('#background-text');
let buttonColor = document.querySelector('button');
buttonColor.addEventListener('click',function(e){
    let myColor = document.getElementById("input-color").value;
    // console.log(myColor);
    setBackground.style.backgroundColor = myColor;
    text.style.color = myColor;
})