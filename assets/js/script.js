const body = document.body;

// Created Elements
const h1El = document.createElement("h1");
const scoreEl = document.createElement("h3");
const pEl = document.createElement("p");
const buttonEl = document.createElement("button");
const liEl = document.createElement("li");
const answer1 = document.createElement("button");
const answer2 = document.createElement("button");
const answer3 = document.createElement("button");
const answer4 = document.createElement("button");

// Header Text
const h1E1Title = "Coding Quiz Challenge";
const h1E1Questions = [
    "Commonly used data types do NOT include:",                                                             // Question 1
    "The condition in an if/else statment is enclosed with _____.",                                         // Question 2
    "Arrays in Javascript can be used to store _____.",                                                     // Question 3
    "String values must be enclosed within _____ when being assigned variables.",                           // Question 4
    "A very userful tool used during development and debugging for printing content to the debugger is:"    // Question 5
]
const h1E1GameOver = "All done!";
const h1E1HighScores = "High Scores";

// Paragraph Text
const pElTitle = "Try to answer the folowing code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by 10 seconds!";

// Button Text
const buttonElTitle = "Start Quiz";
const answers = [
    ["Strings","Booleans","Alerts","Numbers"],                              // Answers for Question 1 (Correct Answer = [2])
    ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],            // Answers for Question 2 (Correct Answer = [1])
    ["Numbers and Strings","Other Arrays","Booleans","All of the Above"],   // Answers for Question 3 (Correct Answer = [3])
    ["Commas","Curly Brackets","Quotes","Parenthesis"],                     // Answers for Question 4 (Correct Answer = [2])
    ["Javascript","Terminal/Bash","For Loops","console.log"]                // Answers for Question 5 (Correct Answer = [3])
];

// Quiz Constants/Variables
var question = 0;
var score = 0;

// Title Screen
Title();

// Title Screen
function Title() {

}

function Q1() {

}













// Create Game Over
function GameOver() {

}

// Create High Scores
function HighScores() {

}




function ResetQuiz() {
    question = 0;
    score = 0;
}
