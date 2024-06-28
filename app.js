let apiUrl = "https://igrantmarketing.com/wp-json/timeshare/v1/mtw";

let jsonData = [];

resultElement = document.getElementById('result');

fetch(apiUrl)
    .then(response => response.json()
        .then((data) => {
            jsonData = data;
            finishLoading();
        })
    )
    .catch(error => console.error(error));

function finishLoading() {
    document.getElementById('form').style.display = "block";
    resultElement.textContent = "";
}

function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase();

    resultElement.textContent = "Loading...";
    resultElement.style.color = "black";

    let mtw = jsonData.find(mtw => mtw.states.includes(inputtedState));

    if (!mtw || !mtw.hasOwnProperty("number")) {
        resultElement.textContent = "No MTW for State " + inputtedState;
        resultElement.style.color = "red";
        return;
    }

    resultElement.textContent = "State " + inputtedState + " assigned to MTW " + mtw["number"];
    resultElement.style.color = "#006400";

}

resultElement.textContent = "Loading...";
resultElement.style.color = "black";

