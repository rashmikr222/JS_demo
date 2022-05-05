const students = {
    sname:"rashmi",
    walk:function walk(){
console.log("i'm walking");
    }
}
console.log(students.sname);
console.log(students["sname"]);
students.walk();

let player1Scores = [];
let player2Scores = [];
// random number
function getRandomNumber()
{
    let n = Math.random();
    n = n*6;
    n= Math.floor(n)+1;
    return n;
}

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
player1.addEventListener('click',()=>{
    // getRandomNumber();
    let player1Score = getRandomNumber();
    document.getElementById("player_one_score").innerHTML = player1Score ;
    player1Scores.push(player1Score)  ;
   let player1 = document.getElementById("p1_total_score");
   player1.innerHTML = player1Scores;
})

player2.addEventListener('click',()=>{
    let player2Score = getRandomNumber();
    document.getElementById("player_two_score").innerHTML = player2Score;
    player2Scores.push(player2Score)  ;
    let player2 = document.getElementById("p2_total_score");
    player2.innerHTML = player2Scores;
    
})