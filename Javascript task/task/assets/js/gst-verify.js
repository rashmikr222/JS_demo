
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

        isGSTInvalid.style.display = "none";
    } else {
        isgstValid.style.display = "none";
        isGSTInvalid.style.display = "block";
    }
})

gstNumberVerified.addEventListener('click', function () {
    const res = userData.map((data) => {
    
        return id  = data.id,
               gstNum = data.gstNumber ,
               uname =data.name,
               ustatus = data.status
    
    }
    ).join(",");
    
    console.log("map result", res);
    console.log("map result", gstNum);

    let inputValue = gstNumber.value
    console.log(inputValue);
    let stringCompare = inputValue.match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)
    console.log("comparing string ", stringCompare);
    if (gstNum == stringCompare) {

        isVerified.style.display = "block";
        userInput.disabled = true;
        errorMessage.innerHTML = "";
        console.log("response", res[2]);
        // name and status
        document.getElementById("userName").value = uname;
        document.getElementById("userStatus").value = ustatus;
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

