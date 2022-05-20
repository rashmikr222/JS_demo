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