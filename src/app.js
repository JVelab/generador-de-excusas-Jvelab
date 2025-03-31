import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarExcusa() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let escusa1 = who[Math.floor(Math.random() * who.length)];
    let escusa2 = action[Math.floor(Math.random() * action.length)];
    let escusa3 = what[Math.floor(Math.random() * what.length)];
    let escusa4 = when[Math.floor(Math.random() * when.length)];

    let escusafinal = escusa1 + " " + escusa2 + " " + escusa3 + " " + escusa4;
  document.querySelector("#excuse").innerHTML = escusafinal
  }

  generarExcusa()
}