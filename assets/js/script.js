// Get elements
const body = document.body;
const highScores = document.querySelector("#high-scores");
const timer = document.querySelector("#timer");
const container = document.querySelector("#container");
const title = document.querySelector("#title");
const footer = document.querySelector("#message");

// Create elements
const p = document.createElement("p");
const start = document.createElement("button");
const ul1 = document.createElement("ul");
const answersList = [
    a1 = document.createElement("li"),
    a2 = document.createElement("li"),
    a3 = document.createElement("li"),
    a4 = document.createElement("li"),
]
const highScoresContainer = document.createElement("div");
const ul2 = document.createElement("ul");
const namesList = [
    n1 = document.createElement("li"),
    n2 = document.createElement("li"),
    n3 = document.createElement("li"),
    n4 = document.createElement("li"),
    n5 = document.createElement("li"),
    n6 = document.createElement("li"),
    n7 = document.createElement("li"),
    n8 = document.createElement("li"),
    n9 = document.createElement("li"),
    n10 = document.createElement("li")
]
const ul3 = document.createElement("ul");
const scoresList = [
    s1 = document.createElement("li"),
    s2 = document.createElement("li"),
    s3 = document.createElement("li"),
    s4 = document.createElement("li"),
    s5 = document.createElement("li"),
    s6 = document.createElement("li"),
    s7 = document.createElement("li"),
    s8 = document.createElement("li"),
    s9 = document.createElement("li"),
    s10 = document.createElement("li")
]
const submit = document.createElement("button");
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");
const bottomBottoms = document.createElement("div");
const playAgain = document.createElement("button");
const clearScores = document.createElement("button");

// Strings
const titleTitleScreen = "Coding Quiz";
const titleGameOver = "All done!";
const titleHighScores = "High-Scores";
const inputLabel = "Enter Name: ";
const description = "Try to answer the folowing code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by 10 seconds!";
const startText = "Start Quiz";
const submitText = "Submit";
const questions = [
    "Commonly used data types do NOT include:",                                                             // Question 1
    "The condition in an if/else statment is enclosed with ＿.",                                            // Question 2
    "Arrays in Javascript can be used to store ＿.",                                                        // Question 3
    "String values must be enclosed within ＿ when being assigned variables.",                              // Question 4
    "A very userful tool used during development and debugging for printing content to the debugger is:"    // Question 5
]
const answers = [
    ["Strings", "Booleans", "Alerts", "Numbers"],                              // Answers for Question 1 (Correct Answer = [2])
    ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],            // Answers for Question 2 (Correct Answer = [1])
    ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],   // Answers for Question 3 (Correct Answer = [3])
    ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],                     // Answers for Question 4 (Correct Answer = [2])
    ["Javascript", "Terminal/Bash", "For Loops", "console.log"]                // Answers for Question 5 (Correct Answer = [3])
];
const correctAnswers = ["Alerts", "Curly Brackets", "All of the Above", "Quotes", "console.log"];
const scoreDisplay = "You're final score is ";
const blank = '';

// Quiz Constants/Variables
var question = 0;
var score = 0;
var time = 50;
var isPlaying = false;

// High-Scores
var highScoresArray = [];
//if (localStorage.getItem("scores") !== null) {
//   highScoresArray = localStorage.getItem("scores");
//}

highScores.addEventListener("click", HighScores);
clearScores.addEventListener("click", ClearScores);
submit.addEventListener("click", Submit, false);
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
    container.appendChild(ul1);
    for (let i = 0; i < 4; i++) {
        ul1.appendChild(answersList[i]);
    }
    ResetVariables();
    SetupQuestion();
    CountDown();
}

// Reset variables for quiz
function ResetVariables() {
    isPlaying = true;
    question = 0;
    score = 0;
    time = 50
}

// Sets up current question with corresponding answers
function SetupQuestion() {
    let a = 0
    title.textContent = questions[question];
    for (let i = 0; i < 4; i++) {
        ul1.children[a].textContent = answers[question][i];
        a++;
    }
    // Set up answers
    SetupAnswers();
}

// Assigns which buttons have correct and incorrect answers
function SetupAnswers() {
    RemoveEventListeners();
    for (let i = 0; i < 4; i++) {
        if (ul1.children[i].textContent !== correctAnswers[question]) {
            ul1.children[i].addEventListener("click", Incorrect);
        } else {
            ul1.children[i].addEventListener("click", Correct);
        }
    }
}

// Removes old event listeners so that new ones with different functions can be added
function RemoveEventListeners() {
    for (let i = 0; i < 4; i++) {
        ul1.children[i].removeEventListener("click", Incorrect);
        ul1.children[i].removeEventListener("click", Correct);;
    }
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
    time -= 5;
    question++;
    if (question < 5){
        SetupQuestion();
    } else {
        GameOver();
    }
}

// Countdown for timer
function CountDown() {
    timer.textContent = "Time: " + time;
    setInterval(function () {
      if (time >= 1) {
        time--;
        timer.textContent = "Time: " + time;
      } 
      if (time === 0 && isPlaying === true) {
        GameOver();
      }
    }, 1000);
}

// Draws game over screen
function GameOver() {
    container.removeChild(ul1);
    container.appendChild(p).textContent = scoreDisplay + score;
    container.appendChild(form);
    form.appendChild(label).textContent = inputLabel;
    form.appendChild(input).maxLength = 10;
    form.appendChild(submit).setAttribute("id", "submit");
    title.textContent = titleGameOver;
    timer.textContent = blank;
    submit.textContent = submitText;
    time = 0;
    isPlaying = false;
}

// Submit name and score
function Submit(event) {
    event.preventDefault();

    // Store user's name and score in an array for the leaderboard
    if (input.value.trim() !== "") {
        // Create object for user's name and score
        let userScore = {
            name: input.value.trim(),
            score: score
        }
        // Add to array
        highScoresArray.push(userScore);
        // Sort array From highest to lowest score
        highScoresArray.sort(function(a, b) {
            return parseInt(b.score) - parseInt(a.score);
        });
        // Keep max of 10 items in array
        if (highScoresArray.length > 10) {
            highScoresArray.length = 10;
        }
        // Store scores locally
        // localStorage.setItem("scores", JSON.stringify(highScoresArray));
        // Go to high scores screen
        HighScores();
    }
}

// Draws high-scores screen
function HighScores() {
    container.innerHTML = blank;
    container.appendChild(title);
    HighScoresList();
    container.appendChild(bottomBottoms).setAttribute("id", "bottom-buttons");
    bottomBottoms.appendChild(playAgain).setAttribute("id", "play-again");
    bottomBottoms.appendChild(clearScores).setAttribute("id", "clear-scores");
    timer.textContent = blank;
    title.textContent = titleHighScores;
    playAgain.textContent = "Play Again";
    clearScores.textContent = "Clear Scores";
    footer.textContent = blank;
    time = 0;
    isPlaying = false;
    // Play Again
    playAgain.addEventListener("click", function(event) {
        event.preventDefault();
        Clear();
        Title();
    });
}

// Draws high-scores list
function HighScoresList() {
    container.appendChild(highScoresContainer).setAttribute("id", "high-scores-container");
    highScoresContainer.appendChild(ul2).setAttribute("id", "high-scores-list");
    highScoresContainer.appendChild(ul3).setAttribute("id", "high-scores-list");
    for (let i = 0; i < highScoresArray.length; i++) {
        ul2.appendChild(namesList[i]).textContent = (highScoresArray[i].name);
        ul3.appendChild(scoresList[i]).textContent = (highScoresArray[i].score);
    }
}

// Deletes all scores
function ClearScores() {
    for (let i = 0; i < highScoresArray.length; i++) {
        namesList[i].textContent = blank;
        scoresList[i].textContent = blank;
    }
    highScoresArray = [];
    // localStorage.removeItem("scores");
    Clear();
    HighScores();
}

// Clearing the screen instead of .removeChild to avoid an error
function Clear() {
    container.innerHTML = blank;
    container.appendChild(title);
}

