var randomnum1=Math.floor(Math.random()*6)+1;
var diceimg="images/dice"+randomnum1+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceimg);

var randomnum2=Math.floor(Math.random()*6)+1;
var diceimg="images/dice"+randomnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",diceimg);


if(randomnum1>randomnum2){
    document.querySelector("h1").textContent="Player 1 Wins 🎉";
}
else if(randomnum1==randomnum2 ){
    document.querySelector("h1").textContent="Draw 😑";

}
else{
    document.querySelector("h1").textContent="Player 2 Wins 🎊";

}
