var webPage = document.querySelector("body")
var quiz = document.querySelector("main");
var quizBox = document.querySelector("#quiz-container")
var optionsBox = document.querySelector("#answers-box");
var introductionDirections = document.querySelector("#introduction-box")
var scoreTable = []
var playerStats = {
    name: '',
    highScore: ''
}

var startBtn = document.querySelector("#start-button");
var footerBox = document.querySelector("footer");
var counter = 30;
var timer = ""
var startCountdown = [];
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
    question: "What is the difference between a JavaScript 'click' vs 'submit' command in addEventLister?",
    answers: [
        {text: 'Nothing, they accomplish the same thing', correct: false},
        {text: 'Click is for Enter keyboards presses while Submit is for mouse clicks', correct: false},
        {text: 'Click refers to mouse clicks while Submit refers to submitting a form', correct: true},
        {text: 'Click refers to starting a function while Submit executes it', correct: false},
        ]
    },

    {
    question: "Which is the correct way to call the function titled 'mainFunction'?",
    answers: [
        {text: 'return mainFunction', correct: false},
        {text: 'mainFunction();', correct: true},
        {text: '(mainFunction);', correct: false},
        {text: 'mainFunction return', correct: false},
        ]
    },

    {
    question: "If attaching a JavaScript source to the body of an HTML file, where must one attach it?",
    answers: [
        {text: 'Right before the body ends, above </body>', correct: true},
        {text: 'Right before the body starts, above <body>', correct: false},
        {text: 'Right after the entire body section, under </body>', correct: false},
        {text: 'Right after the body starts, under <body>', correct: false},
        ]
    },

    {
    question: "What JavaScript syntax is used to have two or more conditions as MUST requirements to pass a specific code (Code in which ALL conditions must be met in order to execute)?",
    answers: [
        {text: ' == ', correct: false},
        {text: ' || ', correct: false},
        {text: ' && ', correct: true },
        {text: ' [] ', correct: false},
        ]
    },

    {
    question: "Which of the following is an array of objects?",
    answers: [
        {text: ' fish = (seabass, tilapia, catfish)', correct: false},
        {text: ' fish = "seabass", "tilapia", "catfish" ', correct: false},
        {text: ' fish = ["seabass","tilapia","catfish"] ', correct: true},
        {text: ' fish = {seabass; tilapia; catfish}', correct: false},
        ]
    },

    {
    question: "What values do Boolean values accept?",
    answers: [
        {text: ' Number values ', correct: false},
        {text: ' String values ', correct: false},
        {text: ' True or False values ', correct: true},
        {text: ' Mouse or keyboard values ', correct: false},
        ]
    },

    {
    question: "Consider a global declared value titled 'userPrompt', what will changing it to '!userPrompt' mean later down in the code?",
    answers: [
        {text: ' The ! will declare the variable as a value of false ', correct: true},
        {text: ' The ! will cause the variable to become a priority over other variables ', correct: false},
        {text: ' The ! will add a numeric value to the variable ', correct: false},
        {text: ' The ! will create a new variable with the same name ', correct: false},
        ]
    }
];

var shuffledQuestions = ""
var playAgainBtn = ""



var startQuiz = function(){
    
    playerStats.name = document.querySelector("input[name='player-name']").value;

    if(!playerStats.name){
        alert("You must enter a name!")
        return
    }

    playerStats.highScore = 0
    
    
    // removing the directions div and the button 'Click Here to Start'. Function initiated by Start button click
    introductionDirections.remove();
    startBtn.remove();

    // create timer HTML under quiz element
    timer = document.createElement("div")
    timer.className = "footer-style";
    footerBox.appendChild(timer);

    quizTimer();
    counterFunc();
    generateQuestions();
}

var generateQuestions = function(){

    for (var i = 0; i < questionsArray.length; i++){
        shuffledQuestions = questionsArray.sort(() => Math.random() - .5);  //shuffles the questions 
        var pickedQuestion = questionsArray[i];
        console.log(shuffledQuestions)
        individualQuestions(pickedQuestion);
        chooseAnswer(pickedQuestion);

        if (pickedQuestion = questionsArray.length - 1){
            quizEnded;
        }
    }
}
   
var individualQuestions = function(question){
    // creates div to place question in
    var quizQuestions = document.createElement("div");
    quizQuestions.className = "first-box-style";
    quizBox.innerHTML =""
    quizQuestions.innerHTML = "<h2 class='first-text-style'>" + question.question + "</H2>";
    quizBox.appendChild(quizQuestions);
    console.log(question.question)
}

var chooseAnswer = function(answers){
    //creates div to place answer buttons in
    var quizOptions = document.createElement("div");
    quizOptions.className = "answers-style";
    console.log(answers.answers)
    // create buttons to press

    var optionBtn1 = document.createElement("button");
    optionBtn1.className = "button-style";
    optionBtn1.innerHTML = answers.answers[0].text;
    optionBtn1.setAttribute("answer-value", answers.answers[0].correct);
 
    quizOptions.appendChild(optionBtn1);

    var optionBtn2 = document.createElement("button");
    optionBtn2.className = "button-style";
    optionBtn2.innerHTML = answers.answers[1].text;
    optionBtn2.setAttribute("answer-value", answers.answers[1].correct);
    quizOptions.appendChild(optionBtn2);

    var optionBtn3 = document.createElement("button");
    optionBtn3.className = "button-style";
    optionBtn3.innerHTML = answers.answers[2].text;
    optionBtn3.setAttribute("answer-value", answers.answers[2].correct);
    quizOptions.appendChild(optionBtn3);

    var optionBtn4 = document.createElement("button");
    optionBtn4.className = "button-style";
    optionBtn4.innerHTML = answers.answers[3].text;
    optionBtn4.setAttribute("answer-value", answers.answers[3].correct);
    quizOptions.appendChild(optionBtn4);

    quizBox.appendChild(quizOptions);

    var value1 = answers.answers[0].correct;
    var value2 = answers.answers[1].correct;
    var value3 = answers.answers[2].correct;
    var value4 = answers.answers[2].correct;
    
    optionBtn1.onclick = function () {
        nextQuestion(value1);
    }
    optionBtn2.onclick = function () {
        nextQuestion(value2);
    }
    optionBtn3.onclick = function () {
        nextQuestion(value3);
    }
    optionBtn4.onclick = function () {
        nextQuestion(value4);
    }
}

var nextQuestion = function(rightorwrong){
    //IF USER FINISHES ALL QUESTIONS, HOW DO I JUMP TO QUIZ END?

    if (rightorwrong === false){
        alert("Wrong Answer! 5 seconds deducted from timer")
        counter = counter - 5;
    } else {
        alert("Right Answer!");
        playerStats.highScore++
        generateQuestions();
    }
}

var quizEnded = function(){
    scoreTable.push(playerStats)
    
    quiz.remove();
    footerBox.remove();
    storeScores();
    saveScore();
    
};

var storeScores = function(){
    localStorage.setItem("player-stuff", JSON.stringify(scoreTable))
}

var saveScore = function() {

    var scoreMain = document.createElement("main");
    scoreMain.className = "main-style";

    var scoreBox = document.createElement("div");
    scoreBox.className = "questions-style";
    scoreBox.innerHTML = "<h1>" + "High Scores" +  "</h1>";

    for (var i = 0; i < scoreTable.length; i++){
        var scoreName = document.createElement("div");
        scoreName.className = "directions-style";
        scoreName.innerHTML = "<h3>" + scoreTable[i].name + "   :   " + scoreTable[i].highScore + "</h3>";
        scoreBox.appendChild(scoreName);
    }
    

    var playAgain = document.createElement("div");
    playAgain.className="controls-style";
    
    playAgainBtn = document.createElement("button");
    playAgainBtn.className = "start-style";
    playAgainBtn.innerHTML = "Play Again";

    resetScoresBtn = document.createElement("button");
    resetScoresBtn.className = "start-style";
    resetScoresBtn.innerHTML = "Reset High Scores";

    
    scoreMain.appendChild(scoreBox);
    playAgain.appendChild(playAgainBtn);
    playAgain.appendChild(resetScoresBtn);
    scoreMain.appendChild(playAgain);
    webPage.appendChild(scoreMain);
    
    playAgainBtn.onclick = function () {
        window.location.reload()
    }

    resetScoresBtn.onclick = function (){
       localStorage.clear();
       scoreName.remove();
       playAgainBtn.remove();
       resetScoresBtn.remove();

       var noScoresTitle = document.createElement("div");
       noScoresTitle.className = "directions-style";
       noScoresTitle.innerHTML = "<h3>" + "No high scores saved" +  "</h3>";

       scoreBox.appendChild(noScoresTitle)
       playAgain.appendChild(playAgainBtn)
    }
}

var quizTimer = function(){
   
    timer.innerHTML = "TIME REMAINING: " + counter;
    counter --;

    if(counter <= 0){
        clearInterval(startCountdown); //this stops the timer
        quizEnded();
    }
}

var counterFunc = function(){
    startCountdown = setInterval(quizTimer, 1000)
}

var loadScores = function(){
    var savedScores = localStorage.getItem("player-stuff");
  
    if (!savedScores){
      return false;
    }

    savedScores = JSON.parse(savedScores);
    scoreTable = savedScores

}

loadScores()

startBtn.addEventListener("click",startQuiz);