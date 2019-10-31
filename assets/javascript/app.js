$(document).ready( function() {
    $(".buttons, #time-remaining, #question, #restart-button").hide();
    $("#start-button").on("click", startGame);
});

var startGame = function() {
    $("#start-button").hide();
    $(".buttons, #time-remaining, #question").show();
    // showQuestions();
    // showChoices();
    question1();
};


// Adds a timer for the Time Remaining
var number = 5;
var intervalId;
var clockRunning = false;
var correct = 0;
console.log("Correct: " + correct);
var incorrect = 0;
console.log("Incorrect: " + incorrect);

function stopClock() {
    clearInterval(intervalId);
    clockRunning = false;
};

// Display the Questions
// function showQuestions() {
//     var questionElement = $("#question");

//     for (var i = 0; i < questions.length; i++) {
//         // questionElement.html(questions[i].question);
    


//     };


// };

function question1() {
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[0].question);
    $("#answer1").html(questions[0].choices[0]);
    $("#answer2").html(questions[0].choices[1]);
    $("#answer3").html(questions[0].choices[2]);
    $("#answer4").html(questions[0].choices[3]);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 5;
        $("#time-remaining span").html(number);
        if (!clockRunning) {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            clockRunning = true;
        };
        function decrement() {
            number--;
            console.log(number);
            $("#time-remaining span").html(number);
            // When time runs out, ends the question with an incorrect
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[0].choices[0]);
                incorrect++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                setTimeout(function() {
                    question2();
                }, 3000);
            }
        };
    };
    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        
        // Determine whether answer was correct, incorrect
        if (this.id == "answer1") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question2();
            }, 3000);
        }
        else if (this.id == "#answer2", "#answer3", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Inorrect! The correct answer was " + questions[0].choices[0]);
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question2();
            }, 3000);
        };
    });
};

function question2() {
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[1].question);
    $("#answer1").html(questions[1].choices[0]);
    $("#answer2").html(questions[1].choices[1]);
    $("#answer3").html(questions[1].choices[2]);
    $("#answer4").html(questions[1].choices[3]);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 5;
        $("#time-remaining span").html(number);
        if (!clockRunning) {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            clockRunning = true;
        };
        function decrement() {
            number--;
            console.log(number);
            $("#time-remaining span").html(number);
            // When time runs out, ends the question with an incorrect
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[1].choices[2]);
                incorrect++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                setTimeout(function() {
                    question3();
                }, 3000);
            }
        };
    };
    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        
        // Determine whether answer was correct, incorrect
        if (this.id == "answer3") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question3();
            }, 3000);
        }
        else if (this.id == "#answer1", "#answer2", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Inorrect! The correct answer was " + questions[1].choices[2]);
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question3();
            }, 3000);
        };
    });
};

// function showChoices() {
//     var choice1 = $("#answer1");
//     var choice2 = $("#answer2");
//     var choice3 = $("#answer3");
//     var choice4 = $("#answer4");

//     var answer1;
//     var answer2;
//     var answer3;
//     var answer4;

//     for (var i = 0; i < questions.length; i++) {

//         answer1 = questions[i].choices[0];
//         answer2 = questions[i].choices[1];
//         answer3 = questions[i].choices[2];
//         answer4 = questions[i].choices[3];

//         // choice1.html(answer1);
//         // choice2.html(answer2);
//         // choice3.html(answer3);
//         // choice4.html(answer4);

//     };

// };





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