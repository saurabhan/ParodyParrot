let btnt = document.querySelector("#btntranslate");
let inputtxt = document.querySelector("#input");
let output = document.querySelector("#output");
let serverURL = "https://api.funtranslations.com/translate/minion.json"

function getURL(input){
    return serverURL + "?text=" + input
    console.log(input)
}

function err(error){
    output.InnerText = "Error Occured, Server Did not respont. Try after sometime."
}

function onClick(){
    console.log("pressed")
    let textinput = inputtxt.value;
    fetch(getURL(textinput))
    .then(response => response.json())
    .then(json =>{
        let translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(err)
}

btnt.addEventListener("click", onClick)