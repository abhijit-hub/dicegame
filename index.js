//There are two metods of solving this. second method is show in index2.js


var randomnum1 = Math.floor(Math.random() * 7);
var randomnum2 = Math.floor(Math.random() * 7);
randomnum1++;
randomnum2++;

// for first dice img

if (randomnum1 == 1 || randomnum1 == 0) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
}
else if (randomnum1 == 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
}
else if (randomnum1 == 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
} 
else if (randomnum1 == 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
} 
else if (randomnum1 == 5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
} 
else if (randomnum1 == 6) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}
// for second dice Image

if (randomnum2 == 1 || randomnum2 == 0) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}
else if (randomnum2 == 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}
else if (randomnum2 == 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
} 
else if (randomnum2 == 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
} 
else if (randomnum2 == 5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
} 
else if (randomnum2 == 6) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}

// for winner declaration

if(randomnum1>randomnum2){
    document.querySelector("h1").textContent="Player 1 Wins 🎉";
}
else if(randomnum1==randomnum2 ){
    document.querySelector("h1").textContent="Draw 😑";

}
else{
    document.querySelector("h1").textContent="Player 2 Wins 🎊";

}



