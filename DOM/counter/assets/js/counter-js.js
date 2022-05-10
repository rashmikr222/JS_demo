let count = 0;
let result = document.querySelector('#result');

let countButton = document.querySelectorAll('button');
countButton.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let currentTargetproperty = e.target.classList[2];
        // console.log(currentTargetproperty);

        if (currentTargetproperty === "buttonIncrease") {
            if (count >= 0 && count <10) {
                count = count + 1;
                result.textContent = count;
            }
        } else if (currentTargetproperty === "buttonDecrease") {
            if (count > 0) {
                count = count - 1;
                result.textContent = count;
            } else if (count === 0) {
                count = count;
                result.textContent = count;
            }
        }
        else if(currentTargetproperty === "buttonReset"){
            count = 0;
            result.textContent = count;
        }


    })
})
