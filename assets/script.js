var webPage = document.querySelector("body")
var quiz = document.querySelector("main");
var quizBox = document.querySelector("#quiz-container")
var optionsBox = document.querySelector("#answers-box");
var introductionDirections = document.querySelector("#introduction-box")
var startBtn = document.querySelector("#start-button");
var optionsBtns = document.getElementsByClassName("button-style");
var footerBox = document.querySelector("footer");
var counter = 6;


var questionsArray = [
    {
    question: 'What is the JavaScript command to add a message to the DevTools browser that does not appear on the site ?',
    answers: [
        {text: 'console.log', correct: true},
        {text: 'message.log', correct: false},
        {text: 'querySelector', correct: false},
        {text: 'event.target', correct: false},
        ]
    },

    {
    question: "What does the acronym 'DOM' stand for?",
    answers: [
        {text: 'Document Objective Module', correct: false},
        {text: 'Document Object Model', correct: true},
        {text: 'Dominant Order Model', correct: false},
        {text: 'Dominant Object Mass', correct: false},
        ]
    },

    {
    question: "What is the JavaScript command to create a attach a newly create element to an existing declared variable?",
    answers: [
        {text: 'pasteElement', correct: false},
        {text: 'glueChild', correct: false},
        {text: 'appendChild', correct: true},
        {text: 'appendElement', correct: false},
        ]
    },

    {
    question: "What is the different between a JavaScript 'click' vs 'submit' command in addEventLister?",
    answers: [
        {text: 'Nothing, they accomplish the same thing', correct: false},
        {text: 'Click is for Enter keyboards presses while Submit is for mouse clicks', correct: false},
        {text: 'Click refers to mouse clicks while Submit refers to submitting a form', correct: true},
        {text: 'Click refers to starting a function while Submit executes it', correct: false},
        ]
    },
]

var questionsOrder = 0
var shuffledQuestions = questionsArray.sort(() => Math.random() - .5);
   // ,
    // "When setting a timer in JavaScript, what units are used?",
    // "What should you type to create a dynamic HTML element?",
    
    // "What equation is used to declare BOTH conditions must be met in a condition statement?",
    // "What would you type in the console to get the result for '10+2'?"






 


var startQuiz = function(){
    console.log("Quiz should start")
    introductionDirections.remove();
    startBtn.remove();

    var timer = document.createElement("div")
    timer.className = "footer-style"
    timer.innerHTML = "TIME REMAINING:" + counter--;

    footerBox.appendChild(timer);



    individualQuestions(shuffledQuestions[questionsOrder]);
    chooseAnswer(shuffledQuestions[questionsOrder]);
}

   
var individualQuestions = function(question){
 
    // for (var i=0; i < questionsArray.length; i++){
    //     console.log(questionsArray[i]);
    //     console.log(questionsArray[0]);
    // }


  

    var quizQuestions = document.createElement("div");
    quizQuestions.className = "first-box-style";
    quizQuestions.innerHTML = "<h2 class='first-text-style'>" + question.question + "</H2>";

    quizBox.appendChild(quizQuestions);

    question.answers.forEach(answer =>{
    chooseAnswer(answer);

    })

    // nextQuestion(quizQuestions);

}

var chooseAnswer = function(answer){

   

    var quizOptions = document.createElement("div");
    quizOptions.className = "answers-style";

    var optionBtn1 = document.createElement("button");
    optionBtn1.className = "button-style";
    optionBtn1.innerHTML = answer.text;
    optionBtn1.setAttribute("id","answer-buttons")



    quizOptions.appendChild(optionBtn1);
 
    
    
    quizBox.appendChild(quizOptions);


    // var optionsBtns = querySelector(".button-style");

    // nextQuestion(optionsBtns);
   
    optionBtn1.addEventListener("click", nextQuestion)

    // nextQuestion(quizOptions);
    
}

var nextQuestion = function(quizQuestions){

    // quizQuestions.remove();
    
    

    // for (var i=0; i < questionsArray.length; i++){
    //     console.log(questionsArray[i]);
        
        
    //     }
        startQuiz()
}


    
    



// optionsBtns.addEventListener("click") {
//     individualQuestions();
// }









var quizEnded = function(){
    quiz.remove();
    footerBox.remove();
    console.log("This should disappear in 6 seconds");
    
};

        var playerDetails = function(){
            var playerName = prompt("The quiz has ended! Enter your name")

            if(!playerName || playerName === "null"){
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

   

    setTimeout(quizEnded, 6000);
    setTimeout(playerDetails, 6000);

    var startCountdown = setInterval(quizTimer, 1000)


}







startBtn.addEventListener("click",startQuiz);
startBtn.addEventListener("click",quizTimer);

