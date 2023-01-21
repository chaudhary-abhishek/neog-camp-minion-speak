// I am not removing some comments because for my reference
var translateBtn = document.querySelector("#btn-translate");
var userTextElement = document.querySelector("#txt-user");
var txtOutput = document.querySelector("#txt-translated-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error){
    console.log("There is an error "+error);
    alert("something went wrong with server, Please try again");
}

function urlGenerator(text){
    return url+"?text="+text;
}

function onClick(){
    var userInput = userTextElement.value;
    fetch(urlGenerator(userInput)).then(response=> response.json()).then(json=>txtOutput.innerText=json.contents.translated).catch(errorHandler)
    
    //console.log("clicked");
    // //console.log(userInput);
    // txtOutput.innerText = userInput;

};
//console.log(translateBtn);
translateBtn.addEventListener("click",onClick);  // Notice here we don't need to pass function with Paranthesis