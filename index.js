var randomNumber1 = Math.random();
randomNumber1*=5;
randomNumber1 = Math.round(randomNumber1)+ 1;

var randomNumber2 = Math.random();
randomNumber2*=5;
randomNumber2 = Math.round(randomNumber2)+ 1;

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 WON!";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent = "Player 2 WON!🚩";
}else{
  document.querySelector("h1").textContent = "Draw!";
}
