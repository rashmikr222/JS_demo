const userPassword = document.querySelector('#userPassword');
const showButton = document.querySelector('#sPassword');
console.log("show button", showButton);
// initially showButton
showButton.style.display = "none";

const hideButton = document.querySelector('#hPassword');
console.log("hide button", hideButton);
// 
hideButton.addEventListener('click', function () {
    showPassword();
})

// 
showButton.addEventListener('click', function () {
    hidePassword();
})
let showPassword = function () {
    userPassword.type = "text";
    console.log("show password");
    showButton.style.display = "block";
    // hideButton display none
    hideButton.style.display = "none";
}

let hidePassword = function () {
    userPassword.type = "password";
    console.log("hide password");
    hideButton.style.display = "block";
    // showButton display none
    showButton.style.display = "none";
}

// login-button

const loginButton = document.querySelector('#form-login-button');
loginButton.addEventListener('click',function(){
    let mobileNumber = document.querySelector('#userMobileNumber').value;
    isValidMobileNumber(mobileNumber);
    
})

