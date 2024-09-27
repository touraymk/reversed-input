/*Lag en funksjon som tar input fra brukeren og reverserer 
teksten ved hjelp av en for-løkke*/
updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    <input type="text"/ onchange="reverseInput(this.value)">
    <button onclick="reverseInput()">Reverser teksten</button>
    <div id="reversedText"></div>
  `;
}

function reverseInput(userInput) {
  var reversed = "";

  for (let i = userInput.length - 1; i >= 0; i--) {
    reversed += userInput[i];
  }

  document.getElementById("reversedText").innerHTML = reversed;
}
