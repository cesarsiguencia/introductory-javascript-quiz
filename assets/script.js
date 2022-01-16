var webPage = document.querySelector("body")
var quiz = document.querySelector("main");
var startBtn = document.querySelector("#start-button");

var quizSession = function(){
    quiz.remove();
    console.log("This should disappear in 6 seconds");
    
};

        var playerDetails = function(){
            var playerName = prompt("The quiz has ended! Enter your name")

            if(!playerName){
                alert("You need to enter a name!");
                playerDetails();
            }

        saveScore(playerName)
        }

        var saveScore = function(playerName) {
            //create MAIN again for player name an high score
            var scoreMain = document.createElement("main");
            scoreMain.className = "main-style";

            var scoreBox = document.createElement("div");
            scoreBox.className = "questions-style";
            scoreBox.innerHTML = "<h1>" + "High Scores" +  "</h1>";

            var scoreName = document.createElement("div");
            scoreName.className = "directions-style";
            scoreName.innerHTML = "<h5>" + playerName +"</h5>";

            scoreBox.appendChild(scoreName);
            scoreMain.appendChild(scoreBox);
            webPage.appendChild(scoreMain);
        }



var quizTimer = function(){
    setTimeout(quizSession, 6000);
    setTimeout(playerDetails, 6000);
}

startBtn.addEventListener("click",quizTimer)

