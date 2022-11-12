let country;
let capital;
let scoreCounter = 0;

function checkAnswer(){
    let userAnswer = document.getElementById("answer").value;
    
    if (userAnswer.toLowerCase() == capital.toLowerCase()){
        scoreCounter++;
        document.getElementById("score").innerHTML = scoreCounter;
        newQuestion();
    }
    else {
        document.getElementById("question").innerHTML = "Feil!";
        scoreCounter = 0;
        document.getElementById("score").innerHTML = scoreCounter;
    }
}
   


function newQuestion(){
    document.getElementById("answer").value = "";
    let countryCapital = COUNTRYCAPITALS[Math.floor(Math.random()*COUNTRYCAPITALS.length)];
    country = countryCapital.country
    capital = countryCapital.capital
    let question = `Hva er hovedstaden i ${country}?`

    document.getElementById("question").innerHTML = question;
    
}

newQuestion()


