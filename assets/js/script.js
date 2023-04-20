const body = document.body;

// Created Elements
const h1El = document.createElement("h1");
const pEl = document.createElement("p");
const buttonEl = document.createElement("button");

// Header Text
const h1E1Title = "Coding Quiz Challenge";
const h1E1Questions = [
    "Commonly used data types do NOT include:",
    "The condition in an if/else statment is enclosed with _____.",
    "Arrays in Javascript can be used to store _____.",
    "String values must be enclosed within _____ when being assigned variables.",
    "A very userful tool used during development and debugging for printing content to the debugger is:",
]
const h1E1GameOver = "All done!";
const h1E1HighScores = "High Scores";

// Paragraph Text
const pElTitle = "Try to answer the folowing code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by 10 seconds!";

// Button Text
const buttonElTitle = "Start Quiz";
const buttonElAnswers = [
    ["Strings","Booleans","Alerts","Numbers"],
    ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
    ["Numbers and Strings","Other Arrays","Booleans","All of the Above"],
    ["Commas","Curly Brackets","Quotes","Parenthesis"],
    ["Javascript","Terminal/Bash","For Loops","console.log"]
];








// Application Variables
var application = true;
var appState = 0;
var isLoaded = false;

// Quiz Constants/Variables
const questions = [1,2,3,4,5];
var questionsLeft = [];





if (appState === 0) {
    CreateTitle();
    isLoaded = true;
}
// Quiz
if (appState === 1) {

}
// Game Over
if (appState === 2) {

}
// High Scores
if (appState === 3) {

}





// Clear Screen
function ClearScreen() {
    body.innerHTML = '';
}





// Create Title Screen
function CreateTitle() {
    body.appendChild(h1El);
    h1El.textContent = h1E1Title;
    body.appendChild(pEl);
    pEl.textContent = pElTitle;
    body.appendChild(buttonEl);
    buttonEl.textContent = buttonElTitle;
}

// Create Game Over
function CreateGameOver() {
    body.appendChild(h1El);
    h1El.textContent = h1E1GameOver;
}