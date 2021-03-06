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
var counter = 60;
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

var questionsCounter = 0


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
    shuffleAndRenderQuestions();
}

var shuffleAndRenderQuestions = function(){
    var shuffledQuestions = questionsArray.sort(() => Math.random() - .5);  //shuffles the questions 
    questionsArray = shuffledQuestions
    generateQuestions()
}

var generateQuestions = function(){

    // for (var i = 0; i < questionsArray.length; i++){
    //     pickedQuestionWithChoices = questionsArray[i];

    //     // if (pickedQuestion = questionsArray.length - 1){
    //     //     quizEnded();
    //     // }

    //     // return
    // }
    // THIS LOOP DID NOT WORK, GENERATED THE VERY LAST QUESTION IN ARRAY, THUS COULD NOT CONTINUE

    var pickedQuestionWithChoices = ''

    if(questionsCounter === 0){
        pickedQuestionWithChoices = questionsArray[0]
        questionsCounter = 1
    } else if (questionsCounter === 10){
        quizEnded()
        return
    } else {
        pickedQuestionWithChoices = questionsArray[questionsCounter]
        questionsCounter++
    }
    generateQuestionsHTML(pickedQuestionWithChoices.question);
    generateAnswerHTML(pickedQuestionWithChoices.answers);
}

var generateQuestionsHTML = function(question){
    // creates div to place question in
    var quizQuestions = document.createElement("div");
    quizQuestions.className = "first-box-style";
    quizBox.innerHTML =""
    quizQuestions.innerHTML = "<h2 class='first-text-style'>" + question + "</H2>";
    quizBox.appendChild(quizQuestions);
    console.log(question.question)
}

var generateAnswerHTML = function(answers){
    //creates div to place answer buttons in
    var quizOptions = document.createElement("div");
    quizOptions.className = "answers-style";

    var answersArray = answers

    var shuffledAnswers = answersArray.sort(() => Math.random() - .5);  //shuffles the questions 
    answersArray = shuffledAnswers

    for (var i = 0; i < answersArray.length; i++){
        var answerValue = answersArray[i].correct
        var optionBtn = document.createElement("button");
        optionBtn.className = "button-style";
        optionBtn.innerHTML = answersArray[i].text;
        optionBtn.setAttribute("answer-value", answerValue);
        quizOptions.appendChild(optionBtn);
    }
    
    quizBox.appendChild(quizOptions);
}

// WHEN USER PICKS AN ANSWER
var grabAnswerValue = function(event){
    var targetEl = event.target;

    if(targetEl.matches('.button-style')){
        var pickedAnswer = event.target.getAttribute('answer-value')
        nextQuestion(pickedAnswer)
    }
}

quiz.addEventListener("click", grabAnswerValue)

var nextQuestion = function(rightorwrong){

    if (rightorwrong === "false"){
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

    var scoreTitle = document.createElement("div");
    scoreTitle.className = "questions-style";
    scoreTitle.innerHTML = "<h1>" + "High Scores" +  "</h1>";

    var scoreBox = document.createElement("div");
    scoreBox.className = "questions-style";

    for (var i = 0; i < scoreTable.length; i++){
        var scoreName = document.createElement("div");
        scoreName.className = "directions-style";
        scoreName.innerHTML = "<h3>" + scoreTable[i].name + "   :   " + scoreTable[i].highScore + "</h3>";
        scoreBox.appendChild(scoreName);
    }
    
    var playAgain = document.createElement("div");
    playAgain.className="controls-style";
    
    var playAgainBtn = document.createElement("button");
    playAgainBtn.className = "start-style";
    playAgainBtn.innerHTML = "Play Again";

    var resetScoresBtn = document.createElement("button");
    resetScoresBtn.className = "start-style";
    resetScoresBtn.innerHTML = "Reset High Scores";

    
    scoreMain.appendChild(scoreTitle);
    scoreMain.appendChild(scoreBox)
    playAgain.appendChild(playAgainBtn);
    playAgain.appendChild(resetScoresBtn);
    scoreMain.appendChild(playAgain);
    webPage.appendChild(scoreMain);
    
    playAgainBtn.onclick = function () {
        window.location.reload()
    }

    resetScoresBtn.onclick = function (){
       localStorage.clear();
       scoreBox.remove();
       playAgainBtn.remove();
       resetScoresBtn.remove();
       quiz.appendChild(scoreBox)

       var noScoresTitle = document.createElement("div");
       noScoresTitle.className = "directions-style";
       noScoresTitle.innerHTML = "<h3>" + "No high scores saved" +  "</h3>";
    
       scoreTitle.appendChild(noScoresTitle)
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