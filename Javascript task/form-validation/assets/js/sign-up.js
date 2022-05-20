// sign-up button
// const signUpButton = document.querySelector('#form-signup-button');
// signUpButton.addEventListener('click',function(){
//     let userEmail = document.querySelector('#userEmailId').value;
//     isValidEmail(userEmail)
// }) 
let userEmail = document.querySelector('#userEmailId');
userEmail.addEventListener('mouseleave',function(e){
    console.log(e);
    userEmail = e.target.value;
    isValidEmail(userEmail);
})
