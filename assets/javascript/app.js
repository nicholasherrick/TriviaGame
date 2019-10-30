$(document).ready( function() {
    $("#time-remaining").hide();
    $("#question").hide();
    $("#restart-button").hide();
    $("#start-button").on("click", startGame);
});

var startGame = function() {
    $("#start-button").hide();
    $("#time-remaining").show();
    $("#question").show();
    showQuestions();
    startClock();
};


// Adds a timer for the Time Remaining
var number = 5;
var intervalId;
var clockRunning = false;

function startClock() {
    number = 5;
    $("#time-remaining span").html(number);
    if (!clockRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    };
};

// Add function to stop timer
function stopClock() {
    clearInterval(intervalId);
    clockRunning = false;
};

// Add the question timer
function decrement() {
    number--;
    console.log(number);
    $("#time-remaining span").html(number);
    if (number === 0) {
        stopClock();
    }
}

// Display the Questions
function showQuestions() {
    var questionElement = $("#question");
    var choice1 = $("#answer1");
    var choice2 = $("#answer2");
    var choice3 = $("#answer3");
    var choice4 = $("#answer4");

    for (var i = 0; i < questions.length; i++) {
        questionElement.html(questions[i].question);
    };

    var answer1 = questions[i].choices[0];
    var answer2 = questions[i].choices[1];
    var answer3 = questions[i].choices[2];
    var answer4 = questions[i].choices[3];

    choice1.html(answer1);
    choice2.html(answer2);
    choice3.html(answer3);
    choice4.html(answer4);


};

var correct = 0;





// Questions and Answers Array
var questions = [
    {
        question: "1. What is 2 + 2?",
        choices: ["4", "0", "8", "2"],
        answer: "4"
    },
    {
        question: "2. What is 9 * 0?",
        choices: ["9", "-9", "0", "18"],
        answer: "0"
    },
    {
        question: "3. What is 17 - 21??",
        choices: ["-6", "6", "-4", "4"],
        answer: "-4"
    },
    {
        question: "4. What is 4 / .5?",
        choices: ["4", "16", "12", "8"],
        answer: "8"
    },
    {
        question: "5. What is 164 - 112?",
        choices: ["84", "52", "48", "62"],
        answer: "52"
    },
];