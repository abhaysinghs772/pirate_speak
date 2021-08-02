`use strict`

let textInput = document.querySelector("#textInput");
let outputDiv = document.querySelector(`.output`)
let myButton = document.querySelector("#translate");

// outputDiv.innerText = `i'm captain america`

myButton.addEventListener(`click`, function (e) {
    // console.log(`${textInput.value}`);
    // outputDiv.innerText = `asjsjjsjsjsjsj ${textInput.value}` ; 
    // const url = `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textInput.value}`;
    const url = `https://api.funtranslations.com/translate/pirate.json?text=${textInput.value}`;

    fetch(url)
        .then(response => response.json())
        // .then(json => console.log(json));
        .then(json => outputDiv.innerText = json.contents.translation);
});
	