
let isValidMobileNumber = function (mobileNumber) {
    console.log(mobileNumber);
    let messageField = document.querySelector('#message-field');  
    // ^ mobile number starts with digits
    // [6-9] here 1st digit of mobile number starts with either 6,7,8,9 
    // mobile numbers are only digits
    // {9} number of digits to be entered
    // $ mobile number ends with digits
    const regex = /^[6-9]\d{9}$/
    console.log("mobile number", mobileNumber);
    if (mobileNumber.trim() == "") {
        messageField.classList.add("empty-field");
        messageField.innerHTML = "please enter mobile number";
        console.log("please enter mobile number");

    } else if ((regex.test(mobileNumber))) {
        
        messageField.style.display = "none"
    }
    else {
        messageField.classList.add("wrong-number");
        messageField.innerHTML = "please enter valid 10 digit mobile number"
        console.log("please enter valid 10 digit mobile number");
    }
}

