document.querySelector('#form-input').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
})