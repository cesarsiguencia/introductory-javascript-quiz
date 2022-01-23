var webPage = document.querySelector("body")
var quiz = document.querySelector("main");
var quizBox = document.querySelector("#quiz-container")
var optionsBox = document.querySelector("#answers-box");
var introductionDirections = document.querySelector("#introduction-box")
var startBtn = document.querySelector("#start-button");
var optionsBtns = document.getElementsByClassName("button-style");
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
        {text: ' [] ', correct: false},
        {text: ' && ', correct: true},
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
    },
]

var questionsOrder = 0
var shuffledQuestions = questionsArray.sort(() => Math.random() - .5);  //shuffles the questions with their appropriate answers
var correctAnswer = true;
// var wrongAnswer = [];
 

var startQuiz = function(){
    // removing the directions div and the button 'Click Here to Start'. Function initiated by Start button click
    introductionDirections.remove();
    startBtn.remove();

    // create timer HTML under quiz element
    timer = document.createElement("div")
    timer.className = "footer-style";
    footerBox.appendChild(timer);

    createQuestions();
}

var createQuestions = function(){
// adding functions for prompts and options to show
    // shuffles the questions
    individualQuestions(shuffledQuestions[questionsOrder]);
    // shuffles the answer choices
    chooseAnswer(shuffledQuestions.answers[questionsOrder]);
}
   
var individualQuestions = function(question){
 
    // for (var i=0; i < questionsArray.length; i++){
    //     console.log(questionsArray[i]);
    //     console.log(questionsArray[0]);
    // }

    // creates div to place question in
    var quizQuestions = document.createElement("div");
    quizQuestions.className = "first-box-style";
    quizBox.innerHTML =""
    quizQuestions.innerHTML = "<h2 class='first-text-style'>" + question.question + "</H2>";
    quizBox.appendChild(quizQuestions);

    // takes the answers array object and pushes it as 'answer'
    question.answers.forEach(choices =>{
    chooseAnswer(choices);
    })

}

var chooseAnswer = function(choices){

    //creates div to place answer buttons in
    var quizOptions = document.createElement("div");
    quizOptions.className = "answers-style";

    // create buttons to press
    var optionBtn1 = document.createElement("button");
    optionBtn1.className = "button-style";
    optionBtn1.innerHTML = choices.text;
    optionBtn1.setAttribute("id","answer-buttons")
    quizOptions.appendChild(optionBtn1);
    quizBox.appendChild(quizOptions);
   
    optionBtn1.addEventListener("click", nextQuestion)

    correctAnswer = choices.correct;
    console.log(correctAnswer);
    return correctAnswer;
    // nextQuestion(quizOptions);
    // question.answers.forEach(correctInfo =>{
    // nextQuestion(correctInfo);
    // })
}

var nextQuestion = function(){
    //IF USEER FINISHES ALL QUESTIONS, HOW DO I JUMP TO QUIZ END?

    if (correctAnswer === true){
        alert("Correct answer!")
        correctAnswer = [];
    questionsOrder++
    }
    // quizQuestions.remove();
    // for (var i=0; i < questionsArray.length; i++){
    //     console.log(questionsArray[i]);    
    //     }

    else {
        alert("Wrong Answer!")
        correctAnswer = []
        questionsOrder++
    }
    createQuestions();

}

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
    console.log(counter);
    timer.innerHTML = "TIME REMAINING: " + counter;
    counter --;
     if(counter === 0){
         clearInterval(startCountdown);
         quizEnded();
         playerDetails();
     }
    // setTimeout(quizEnded, 10000);
    // setTimeout(playerDetails, 10000);
}

var counterFunc = function(){
    startCountdown = setInterval(quizTimer, 1000)
}


startBtn.addEventListener("click",startQuiz);
startBtn.addEventListener("click",quizTimer);
startBtn.addEventListener("click",counterFunc);

