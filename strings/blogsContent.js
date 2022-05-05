function displayCount() {
    let totalCharacter = 10;
    console.log("key pressed is true");
    let yourContent = document.getElementById("blogContent").value;
    let yourContentCount = yourContent.length;
    console.log(yourContentCount);
    if (yourContentCount - totalCharacter !== 1) {
        let numberOfCharacters = document.getElementById("numberOfCharacters");
        numberOfCharacters.innerHTML = `You have written ${yourContentCount} characters ,
                    you have ${yourContentCount - totalCharacter} characters left. `;
        yourContent = yourContent.slice(0, 10);
    }
    else {
        document.getElementById("blogContent").readOnly = true;
    }
}
// edit button
let btnenable = document.querySelector("#enableInput");
btnenable.addEventListener('click', function () {
    console.log("input enable");
    let totalCharacter = 10;
    let yourContent = document.getElementById("blogContent").value;
    if ((yourContent.length > 0) || (yourContent.length < 11)) {
        document.getElementById("blogContent").readOnly = false;
        let numberOfCharacters = document.getElementById("numberOfCharacters");
        numberOfCharacters.innerHTML = `You have written ${yourContentCount} characters ,
        you have ${yourContentCount - totalCharacter} characters left. `;
        yourContent = yourContent.slice(0, 10);
    }
    else {
        document.getElementById("blogContent").readOnly = true;
    }
})

let btnCounter = document.querySelector("#blogContent")

let counter = 0;
var yourContentCount = 10;

btnCounter.addEventListener('keydown', function (event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace") {
        console.log("backspace pressed");
        if (yourContentCount === 11 || yourContentCount > 0) {
            counter++;
            yourContentCount--;

        }
        console.log("your content counter", yourContentCount)
        console.log("total count", counter);
        let numberOfCharacters = document.getElementById("numberOfCharacters");
        numberOfCharacters.innerHTML = `You have written ${yourContentCount} characters ,
            you have ${counter} characters left. `;


    }

    else if (yourContentCount === 0 || yourContentCount <= 10) {
        yourContentCount++;
        counter--;
        console.log("your content counter", yourContentCount)
        console.log("total count", counter);
        let numberOfCharacters = document.getElementById("numberOfCharacters");
        numberOfCharacters.innerHTML = `You have written ${yourContentCount} characters ,
             you have ${counter} characters left. `;
    }
    else {
        console.log("error");
    }
});

