let isValidPassword = function(userPassword){
    const regex = /^[a-z]{6}$/
    if(userPassword.trim() == ""){
        console.log("please enter password");
    }
    else if(regex.test(userPassword))
    {
        console.log("correct password");
    }
    else {
        console.log("please enter valid password");
    }
}