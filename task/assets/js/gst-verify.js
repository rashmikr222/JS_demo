// console.log("jsonobject", gstArr);
// const jsonData = JSON.parse(gstArr);
// console.log("json elements", gstArr);
let userInput = document.querySelector('#switchBtn');
// gst number giver by user
const gstNumber = document.querySelector('#gstInput');
// below line of code is used to set the placeholder length
gstNumber.setAttribute('size', gstNumber.getAttribute('placeholder').length);
console.log("gstNumber", gstNumber.value);
let errorMessage = document.querySelector("#error-message")
const isgstValid = document.querySelector('#validGst');
const isGSTInvalid = document.querySelector('#gstNotAvailable');
const isVerified = document.querySelector('#verified');
// verify button
const gstNumberVerified = document.querySelector('#verifyButton');
console.log("gst valid", isgstValid);
// check button
const isValidGst = document.querySelector('#checkAgree');
// submit button
let isButtonAgree = document.querySelector('#agreeButton')
isButtonAgree.disabled = true;
// check button
const isnoGst = document.querySelector('#noGstCheckAgree');
// submit button
const noGstButton = document.querySelector("#noGstNumber");
noGstButton.disabled = true;

isVerified.style.display = "none";
isgstValid.style.display = "none";
userInput.addEventListener('click', function (e) {
    if (userInput.checked == true) {
        isgstValid.style.display = "block";
        // checkGST();
        isGSTInvalid.style.display = "none";
    } else {
        isgstValid.style.display = "none";
        isGSTInvalid.style.display = "block";
    }
})

gstNumberVerified.addEventListener('click', function () {
    // fetch(gstArr)
    //     .then(function (response) {
    //         console.log('responce', response);
            // The JSON data will arrive here
    //     })
    //     .catch(function (err) {
    //         console.log('error',err);
            // If an error occured, you will catch it here
    //     });
    //    console.log('gst data====>',gstArr);
    // console.log("json",getJson);
    // console.log("verified button gstNumber", gstNumber.value);
    // if
    // console.log("id",id);
    let inputValue = gstNumber.value
    console.log(inputValue);
    if (inputValue.match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)) {

        isVerified.style.display = "block";
        userInput.disabled = true;
        errorMessage.innerHTML = ""
    } else {
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Please enter valid gst number";
        isVerified.style.display = "none";
        userInput.disabled = false;
    }
})

// checkbox no gst number 
isnoGst.addEventListener('click', function () {
    if (isnoGst.checked == true) {
        noGstButton.disabled = false;
        userInput.disabled = true;
    } else {
        noGstButton.disabled = true;
        userInput.disabled = false;
    }
})
noGstButton.addEventListener('click', function () {

    alert("thank you, your details successfuly stored in database")
})
// valid gst number agree checkbox
isValidGst.addEventListener('click', function (e) {

    if (isValidGst.checked == true) {
        isButtonAgree.disabled = false;
        userInput.disabled = true;
    } else {
        isButtonAgree.disabled = true;
        userInput.disabled = false;
    }
})

isButtonAgree.addEventListener('click', function () {
    alert("thank you, your details successfuly stored in database")
})

