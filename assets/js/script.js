const body = document.body;
// Created Elements
const h1El = document.createElement("h1");
const pEl = document.createElement("p");
const buttonEl = document.createElement("button");
// Header Text
const h1E1TitleScreen = "Coding Quiz Challenge";
const h1E1Q1 = "Commonly used data types do NOT include:";
const h1E1Q2 = "The condition in an if/else statment is enclosed with _____.";
const h1E1Q3 = "Arrays in Javascript can be used to store _____.";
const h1E1Q4 = "String values must be enclosed within _____ when being assigned variables.";
const h1E1Q5 = "A very userful tool used during development and debugging for printing content to the debugger is:";
const h1E1GameOver = "All done!";
const h1E1HighScores = "High Scores";
// Paragraph Text
const pElTitleScreen = "Try to answer the folowing code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by 10 seconds!";
// Button Text
const buttonElTitleScreen = "Start Quiz";
// Application Variables
var quiz = true;
var quizState = 0;
var isLoaded = false;

// Application Loop
while (quiz === true) {
    // Title Screen
    if (quizState === 0 && isLoaded === false) {
        TitleScreen();
        isLoaded = true;
    }
    // Quiz
    if (quizState === 1) {

    }
    // Game Over
    if (quizState === 2) {

    }
    // 
    if (quizState === 3) {

    }
}

// Create Title Screen
function TitleScreen() {
    body.appendChild(h1El);
    h1El.textContent = h1E1TitleScreen;
    body.appendChild(pEl);
    pEl.textContent = pElTitleScreen;
    body.appendChild(buttonEl);
    buttonEl.textContent = buttonElTitleScreen;
}


