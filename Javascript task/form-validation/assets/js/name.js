let isValidName = function (userName) {
    // 
    const errorName = document.querySelector('#name-field');
    // const regex = /^[a-zA-Z]\w$/
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    if (userName.trim() == " ") {
        errorName.classList.add("empty-name");
        errorName.innerHTML = "please enter name"
        console.log("please enter name");
    } else if (
        regex.test(userName)) {
        console.log("user name successful");
    }
    else {
        errorName.classList.add("wrong-name");
errorName.innerHTML = "please enter valid name"
        console.log("please enter valid name");
    }
}