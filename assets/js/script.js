const body = document.body;

// Created Elements
const h1El = document.createElement("h1");
const pEl = document.createElement("p");
const buttonEl = document.createElement("button");

// Header Text
const h1E1Title = "Coding Quiz Challenge";
const h1E1Questions = [
    "Commonly used data types do NOT include:",                                                             // Question 1
    "The condition in an if/else statment is enclosed with _____.",                                         // Question 2
    "Arrays in Javascript can be used to store _____.",                                                     // Question 3
    "String values must be enclosed within _____ when being assigned variables.",                           // Question 4
    "A very userful tool used during development and debugging for printing content to the debugger is:",   // Question 5
]
const h1E1GameOver = "All done!";
const h1E1HighScores = "High Scores";

// Paragraph Text
const pElTitle = "Try to answer the folowing code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by 10 seconds!";

// Button Text
const buttonElTitle = "Start Quiz";
const buttonElAnswers = [
    ["Strings","Booleans","Alerts","Numbers"],                              // Answers for Question 1
    ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],            // Answers for Question 2
    ["Numbers and Strings","Other Arrays","Booleans","All of the Above"],   // Answers for Question 3
    ["Commas","Curly Brackets","Quotes","Parenthesis"],                     // Answers for Question 4
    ["Javascript","Terminal/Bash","For Loops","console.log"]                // Answers for Question 5
];








// Application Variables
var appState = 0;

// Quiz Constants/Variables
const questions = [1,2,3,4,5];
var questionsLeft = [];
var question;





if (appState === 0) {
    Title();
    questionsLeft = questions;
}
// Quiz
if (appState === 1) {

}
// Game Over
if (appState === 2) {
    GameOver();
}
// High Scores
if (appState === 3) {
    HighScores();
}





// Select Quesiton
function SelectQuestion() {
    question = questionsLeft[Math.floor(Math.random()*questionsLeft.length)];
    // Remove selected question from pool
    for (i = 0; i < questionsLeft.length; i++) {
        if (questionsLeft[i] === question) {
            questionsLeft.splice(i, 1);
        }
    }
}







// Create Title Screen
function Title() {
    ClearScreen();
    body.appendChild(h1El);
    h1El.textContent = h1E1Title;
    body.appendChild(pEl);
    pEl.textContent = pElTitle;
    body.appendChild(buttonEl);
    buttonEl.textContent = buttonElTitle;
}

// Create Game Over
function GameOver() {
    ClearScreen();
    body.appendChild(h1El);
    h1El.textContent = h1E1GameOver;
}

// Create High Scores
function HighScores() {
    ClearScreen();
    body.appendChild(h1El);
    h1El.textContent = h1E1HighScores;
}






// Clear Screen
function ClearScreen() {
    body.innerHTML = '';
}
