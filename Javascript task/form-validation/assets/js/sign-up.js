// sign-up button

let userEmail = document.querySelector('#userEmailId');
userEmail.addEventListener('mouseleave',function(e){
    console.log(e);
    userEmail = e.target.value;
    isValidEmail(userEmail);
})

let userName = document.querySelector('#userName');
userName.addEventListener('mouseleave',function(e){
    userName = e.target.value;
    isValidName(userName)
})

let spassword = document.querySelector('#signupuserPassword');

//password show
let signUpHideButton = document.querySelector('#signupHidePassword')
let signUpShowButton = document.querySelector('#signupShowPassword')
signUpShowButton.style.display = "none"

signUpShowButton.addEventListener('click',function(){
    signUpHide()

})

signUpHideButton.addEventListener('click',function(){
    signUpShow()

})


let signUpShow = function(){
    spassword.type = "text";
    signUpShowButton.style.display = "block"
signUpHideButton.style.display = "none"
}

let signUpHide = function(){
    spassword.type = "password"
    signUpHideButton.style.display = "block"
    signUpShowButton.style.display = "none"
}

// spassword.addEventListener('click',function(e){
//     spassword = e.target.value;
//     isValidPassword(spassword);
    // signUpHideButton()
    // signUpShowButton()
    // show()
    // hide()
// })