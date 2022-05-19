let switchButton = document.querySelector('#switchBtn');
let btnEle = document.querySelector('#btn-check');
const message = document.querySelector('#message');
message.style.display = "none";
switchButton.addEventListener('click', function () {
    console.log("button innerhtml", btnEle.innerHTML);
    
    if (switchButton.checked == true) {
        btnEle.innerHTML = "on";
        message.style.display = "block";
        document.querySelector('#btn-check').disabled = false
        
    } else {
        btnEle.innerHTML = "off";
        message.style.display = "none";
        document.querySelector('#btn-check').disabled = true
    }

})