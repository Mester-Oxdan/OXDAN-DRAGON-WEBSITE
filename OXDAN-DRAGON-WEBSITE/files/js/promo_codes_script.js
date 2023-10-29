let submitButton = document.getElementById("submit");
let commandInput = document.getElementById("command");
let outputDiv = document.getElementById("output");

let text = "wrong";
let result = text.fontcolor("red");

function playSound_promo() {
  setTimeout(() => {
      document.getElementById('mySound_promo').play();
      document.getElementById('mySound_promo').addEventListener('ended', function() {
        document.getElementById('mySound_promo').play();
      });
      
  }, 500)}

submitButton.addEventListener("click", function() {
  let command_1 = commandInput.value;
  var command = command_1.replace(/\s+/g, '');
  if (command.toLowerCase() === "sans-battle" || command.toLowerCase() === "sans battle" || command.toLowerCase() === "sans_battle") {
    window.open('https://jcw87.github.io/c2-sans-fight/', "_self");
  } else {

    var audio = new Audio('resources/musics/asriel.mp3');
    audio.play();

    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

    // Usage: 
    addCSS(".promo_text_bad_1{ position: absolute; left: 44%; top: 54%; font-weight: bolder; font-size: 35px; }")
    outputDiv.innerHTML = "<p class='promo_text_bad_1'>'" + command + "'" + " Is " + result + " promo-code " + "</p>";
  }
  commandInput.value = "";
});

document.addEventListener('keyup', function(event) 
{
  if (event.code === 'Enter')
  {
  let command_2 = commandInput.value;
  var command = command_2.replace(/\s+/g, '');
  if (command.toLowerCase() === "sans-battle" || command.toLowerCase() === "sans battle" || command.toLowerCase() === "sans_battle") {
    window.open('https://jcw87.github.io/c2-sans-fight/', "_self");
  } 
  else {

    var audio = new Audio('resources/musics/asriel.mp3');
    audio.play();

    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

    // Usage: 
    addCSS(".promo_text_bad_2{ position: absolute; left: 44%; top: 54%; font-weight: bolder; font-size: 35px; }")

    outputDiv.innerHTML = "<p class='promo_text_bad_2'>'" + command + "'" + " Is " + result + " promo-code " + "</p>";
  }
  commandInput.value = "";
}
});