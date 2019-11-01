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

function resetGame() {
    $(".buttons, #time-remaining, #question, #restart-button, #empty-div1, #empty-div2").hide();
    $("#start-button").show();
    number = 30;
    clearInterval(intervalId);
    clockRunning = false;
    correct = 0;
    console.log("Correct: " + correct);
    incorrect = 0;
    console.log("Incorrect: " + incorrect);
    $("#start-button").on("click", startGame);
}

// Adds a timer for the Time Remaining
var number = 30;
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

function question1() {
    var newDiv = $("<div class='new-Div'>");
    var newButton1 = $("<button type='button' id='answer1'>").text(questions[0].choices[0]);
    var newButton2 = $("<button type='button' id='answer2'>").text(questions[0].choices[1]);
    var newButton3 = $("<button type='button' id='answer3'>").text(questions[0].choices[2]);
    var newButton4 = $("<button type='button' id='answer4'>").text(questions[0].choices[3]);
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[0].question);
    newDiv.append(newButton1);
    newDiv.append(newButton2);
    newDiv.append(newButton3);
    newDiv.append(newButton4);
    $("#question").append(newDiv);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 30;
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
    var newDiv = $("<div class='new-Div'>");
    var newButton1 = $("<button type='button' id='answer1'>").text(questions[1].choices[0]);
    var newButton2 = $("<button type='button' id='answer2'>").text(questions[1].choices[1]);
    var newButton3 = $("<button type='button' id='answer3'>").text(questions[1].choices[2]);
    var newButton4 = $("<button type='button' id='answer4'>").text(questions[1].choices[3]);
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[1].question);
    newDiv.append(newButton1);
    newDiv.append(newButton2);
    newDiv.append(newButton3);
    newDiv.append(newButton4);
    $("#question").append(newDiv);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 30;
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

function question3() {
    var newDiv = $("<div class='new-Div'>");
    var newButton1 = $("<button type='button' id='answer1'>").text(questions[2].choices[0]);
    var newButton2 = $("<button type='button' id='answer2'>").text(questions[2].choices[1]);
    var newButton3 = $("<button type='button' id='answer3'>").text(questions[2].choices[2]);
    var newButton4 = $("<button type='button' id='answer4'>").text(questions[2].choices[3]);
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[2].question);
    newDiv.append(newButton1);
    newDiv.append(newButton2);
    newDiv.append(newButton3);
    newDiv.append(newButton4);
    $("#question").append(newDiv);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 30;
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
                $("#question").html("Times Up! The correct answer was " + questions[2].choices[2]);
                incorrect++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                setTimeout(function() {
                    question4();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        
        // Determine whether answer was correct, incorrect
        if (this.id == "answer3") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer1, #answer2, #answer4").hide();
            $("#question").html("Correct!");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question4();
            }, 3000);
        }
        else if (this.id == "#answer2", "#answer3", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Inorrect! The correct answer was " + questions[2].choices[2]);
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question4();
            }, 3000);
        };
    });
};

function question4() {
    var newDiv = $("<div class='new-Div'>");
    var newButton1 = $("<button type='button' id='answer1'>").text(questions[3].choices[0]);
    var newButton2 = $("<button type='button' id='answer2'>").text(questions[3].choices[1]);
    var newButton3 = $("<button type='button' id='answer3'>").text(questions[3].choices[2]);
    var newButton4 = $("<button type='button' id='answer4'>").text(questions[3].choices[3]);
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[3].question);
    newDiv.append(newButton1);
    newDiv.append(newButton2);
    newDiv.append(newButton3);
    newDiv.append(newButton4);
    $("#question").append(newDiv);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 30;
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
                $("#question").html("Times Up! The correct answer was " + questions[3].choices[3]);
                incorrect++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                setTimeout(function() {
                    question5();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        
        // Determine whether answer was correct, incorrect
        if (this.id == "answer4") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question5();
            }, 3000);
        }
        else if (this.id == "#answer1", "#answer2", "#answer3") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Inorrect! The correct answer was " + questions[3].choices[3]);
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                question5();
            }, 3000);
        };
    });
};

function question5() {
    var newDiv = $("<div class='new-Div'>");
    var newButton1 = $("<button type='button' id='answer1'>").text(questions[4].choices[0]);
    var newButton2 = $("<button type='button' id='answer2'>").text(questions[4].choices[1]);
    var newButton3 = $("<button type='button' id='answer3'>").text(questions[4].choices[2]);
    var newButton4 = $("<button type='button' id='answer4'>").text(questions[4].choices[3]);
    $(".buttons, #time-remaining, #question").show();
    $("#question").html(questions[4].question);
    newDiv.append(newButton1);
    newDiv.append(newButton2);
    newDiv.append(newButton3);
    newDiv.append(newButton4);
    $("#question").append(newDiv);
    timer();
    // Starts a timer for question 1
    function timer() {
        number = 30;
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
                $("#question").html("Times Up! The correct answer was " + questions[4].choices[1]);
                incorrect++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                setTimeout(function() {
                    gameOver();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        
        // Determine whether answer was correct, incorrect
        if (this.id == "answer2") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                gameOver();
            }, 3000);
        }
        else if (this.id == "#answer1", "#answer3", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Inorrect! The correct answer was " + questions[4].choices[1]);
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            setTimeout(function() {
                gameOver();
            }, 3000);
        };
    });
};

function gameOver() {
    stopClock();
    $("#time-remaining, .buttons").hide();
    $("#question, #restart-button, #empty-div1, #empty-div2").show();
    $("#question").html("Game Over!");
    $("#empty-div1").html("Correct Answers: " + correct);
    $("#empty-div2").html("Incorrect Answers: " + incorrect);
    $("#restart-button").on("click", function() {
        resetGame();
    });
};

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