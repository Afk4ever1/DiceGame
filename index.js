let name1 = prompt("enter your name bro1!");
let name2 = prompt("enter your name bro2!");
document.querySelector(".dice1 h2").innerHTML = name1;
document.querySelector(".dice2 h2").innerHTML = name2;
let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;
let dest1 = "./images/dice" + a + ".png";
let dest2 = "./images/dice" + b + ".png";
document.querySelector(".D1").setAttribute("src", dest1);
document.querySelector(".D2").setAttribute("src", dest2);
if (a > b) {
  document.querySelector("h1").innerHTML = name1 + " Wins!";
} else if (a < b) {
  document.querySelector("h1").innerHTML = name2 + " Wins!";
} else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
