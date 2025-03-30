import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generarExcusa(arr) {
    return arr(Math.floor(Math.random() * 4 + 1));
  }

  let escusa1 = generarExcusa(who);
  let escusa2 = generarExcusa(action);
  let escusa3 = generarExcusa(what);
  let escusa4 = generarExcusa(when);

  console.log(escusa1, escusa2, escusa3, escusa4);
}