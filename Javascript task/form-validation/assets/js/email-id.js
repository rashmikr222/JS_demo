let isValidEmail = function (userEmail) {
    // to print error message
    let emailError = document.querySelector('#email-field')
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (userEmail.trim() == " ") {
        emailError.classList.add("empty-email");
        emailError.innerHTML = "please enter email id";
        console.log("please enter email id");
    }
    else if (regex.test(userEmail)) {

        emailError.innerHTML = ""
        console.log("email id successful");
    } else {
        emailError.classList.add("wrong-email");
        emailError.innerHTML = "please enter valid email id"
        console.log("please enter valid email id");
    }
}