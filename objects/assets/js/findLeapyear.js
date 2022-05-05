
let leapBtn = document.getElementById("checkLeap");
leapBtn.addEventListener('click',()=>{
    const year = document.getElementById("year").value;
    isLeapYear(year);
})
function isLeapYear(year){
    // console.log("year",year)
    if(year%4){
        console.log(year,"leap year");
    }
    else if(year%400){
        console.log(year,"leap year");
    }
    else{
        console.log(year,"not a leap year");
    }
    
}
