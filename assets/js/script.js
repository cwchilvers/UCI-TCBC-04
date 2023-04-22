// Get elements
const body = document.body;
const highScores = document.querySelector("#high-scores");
const timer = document.querySelector("#timer");
const container = document.querySelector("#container");
const title = document.querySelector("#title");
const footer = document.querySelector("#message");

// Create elements
const p = document.createElement("p");
const ul = document.createElement("ul");
const start = document.createElement("button");
const a1 = document.createElement("li");
const a2 = document.createElement("li");
const a3 = document.createElement("li");
const a4 = document.createElement("li");
const submit = document.createElement("button");
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");

// Strings
const titleTitleScreen = "Coding Quiz";
const titleGameOver = "All done!";
const titleHighScores = "High-Scores";
const inputLabel = "Enter Initials: ";
const description = "Try to answer the folowing code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by 10 seconds!";
const startText = "Start Quiz";
const submitText = "Submit";
const questions = [
    "Commonly used data types do NOT include:",                                                             // Question 1
    "The condition in an if/else statment is enclosed with _____.",                                         // Question 2
    "Arrays in Javascript can be used to store _____.",                                                     // Question 3
    "String values must be enclosed within _____ when being assigned variables.",                           // Question 4
    "A very userful tool used during development and debugging for printing content to the debugger is:"    // Question 5
]
const answers = [
    ["Strings", "Booleans", "Alerts", "Numbers"],                              // Answers for Question 1 (Correct Answer = [2])
    ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],            // Answers for Question 2 (Correct Answer = [1])
    ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],   // Answers for Question 3 (Correct Answer = [3])
    ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],                     // Answers for Question 4 (Correct Answer = [2])
    ["Javascript", "Terminal/Bash", "For Loops", "console.log"]                // Answers for Question 5 (Correct Answer = [3])
];
const blank = '';
var scoreDisplay = "You're final score is ";

// Correct/Incorrect Answers
var answersArray = [Answers1, Answers2, Answers3 ,Answers4, Answers5];

// Quiz Constants/Variables
var question = 0;
var score = 0;
var time = 50;
var isPlaying = false;

highScores.addEventListener("click", HighScores);
Title();

// Draws Title Screen
function Title() {
    container.appendChild(p).textContent = description;
    container.appendChild(start).textContent = startText;
    timer.textContent = blank;
    title.textContent = titleTitleScreen;
    start.addEventListener("click", SetupQuiz);
}

// Sets up quiz and goes to first question
function SetupQuiz() {
    container.removeChild(p);
    container.removeChild(start);
    container.appendChild(ul);
    ul.appendChild(a1);
    ul.appendChild(a2);
    ul.appendChild(a3);
    ul.appendChild(a4);
    timer.textContent = "Time: " + time;
    isPlaying = true;
    ResetVariables();
    SetupQuestion();
    CountDown();
}

// Reset variables for quiz
function ResetVariables() {
    question = 0;
    score = 0;
    time = 50
}

// Sets up current question with corresponding answers
function SetupQuestion() {
    let a = 0
    title.textContent = questions[question];
    for (let i = 0; i < 4; i++) {
        ul.children[a].textContent = answers[question][i];
        a++;
    }
    // Set up answers
    answersArray[question]();
}

// Assigns which buttons have correct and incorrect answers
function Answers1() {
    RemoveEventListeners();
    ul.children[0].addEventListener("click", Incorrect);
    ul.children[1].addEventListener("click", Incorrect);
    ul.children[2].addEventListener("click", Correct);
    ul.children[3].addEventListener("click", Incorrect);
}

function Answers2() {
    RemoveEventListeners();
    ul.children[0].addEventListener("click", Incorrect);
    ul.children[1].addEventListener("click", Correct);
    ul.children[2].addEventListener("click", Incorrect);
    ul.children[3].addEventListener("click", Incorrect);
}

function Answers3() {
    RemoveEventListeners();
    ul.children[0].addEventListener("click", Incorrect);
    ul.children[1].addEventListener("click", Incorrect);
    ul.children[2].addEventListener("click", Incorrect);
    ul.children[3].addEventListener("click", Correct);
}

function Answers4() {
    RemoveEventListeners();
    ul.children[0].addEventListener("click", Incorrect);
    ul.children[1].addEventListener("click", Incorrect);
    ul.children[2].addEventListener("click", Correct);
    ul.children[3].addEventListener("click", Incorrect);
}

function Answers5() {
    RemoveEventListeners();
    ul.children[0].addEventListener("click", Incorrect);
    ul.children[1].addEventListener("click", Incorrect);
    ul.children[2].addEventListener("click", Incorrect);
    ul.children[3].addEventListener("click", Correct);
}

// Removes old event listeners so that new ones with different functions can be added
function RemoveEventListeners() {
    ul.children[0].removeEventListener("click", Incorrect);
    ul.children[1].removeEventListener("click", Incorrect);
    ul.children[2].removeEventListener("click", Incorrect);
    ul.children[3].removeEventListener("click", Incorrect);
    ul.children[0].removeEventListener("click", Correct);
    ul.children[1].removeEventListener("click", Correct);
    ul.children[2].removeEventListener("click", Correct);
    ul.children[3].removeEventListener("click", Correct);
}

// For when user selects correct answer
function Correct() {
    footer.textContent = "Correct!";
    score++;
    question++;
    if (question < 5){
        SetupQuestion();
    } else {
        GameOver();
    }
}
    
// For when user selects wrong answer
function Incorrect() {
    footer.textContent = "Wrong";
    question++;
    if (question < 5){
        SetupQuestion();
    } else {
        GameOver();
    }
}

// Countdown for timer
function CountDown() {
    setInterval(function () {
      if (time > 1) {
        time--;
        timer.textContent = "Time: " + time;
      } else {
        GameOver();
      }
    }, 1000);
}


// Draws game over screen
function GameOver() {
    container.removeChild(ul);
    container.appendChild(p).textContent = scoreDisplay + score;
    container.appendChild(form);
    form.appendChild(label).textContent = inputLabel;
    form.appendChild(input).maxLength = 10;
    form.appendChild(submit).setAttribute("id", "submit");
    submit.textContent = submitText;
    title.textContent = titleGameOver;
    timer.textContent = blank;
    submit.addEventListener("click", Submit);
    time = 0;
    isPlaying = false;
}

// Stores user's initials in local storage and goes to high-score screen
function Submit () {
    HighScores();
}

// Draws high-score screen
function HighScores() {
    container.innerHTML = blank;
    container.appendChild(title);
    timer.textContent = blank;
    time = 0;
    isPlaying = false;
    title.textContent = titleHighScores;
    footer.textContent = blank;
}
