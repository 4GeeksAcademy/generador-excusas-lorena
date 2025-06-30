import "./style.css";

function chooseOne(list){
  return list[Math.floor(Math.random() * list.length)];
}


window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excuse = chooseOne(who) + " " + chooseOne(action) + " " + chooseOne(what) + " " + chooseOne(when);
  document.getElementById("excuse").innerText = excuse;
};
