// Waits for document to load
$(document).ready( function() {

    // Hides everything we dont need
    $(".buttons, #time-remaining, #question, #restart-button").hide();

    // Start the game by clicking the start button
    $("#start-button").on("click", startGame);
});

// Function to start game
var startGame = function() {

    // Don't need this anymore
    $("#start-button").hide();

    // Now we need some of those hidden elements
    $(".buttons, #time-remaining, #question").show();

    // Takes us to question 1 to begin the game
    question1();
};

// Sets everything back to normal so we can play again
function resetGame() {
    $(".buttons, #time-remaining, #question, #restart-button, #empty-div1, #empty-div2, #empty-div3").hide();
    $("#start-button").show();
    number = 15;
    clearInterval(intervalId);
    clockRunning = false;
    correct = 0;
    console.log("Correct: " + correct);
    incorrect = 0;
    console.log("Incorrect: " + incorrect);
    unanswered = 0;
    console.log("Unanswered: " + unanswered);
    $("#start-button").on("click", startGame);
}

// Added our global variables
var number = 15;
var intervalId;
var clockRunning = false;
var correct = 0;
console.log("Correct: " + correct);
var incorrect = 0;
console.log("Incorrect: " + incorrect);
var unanswered = 0;
console.log("Unanswered: " + unanswered);

// Call on this function to stop the timer
function stopClock() {
    clearInterval(intervalId);
    clockRunning = false;
};

// Heres our first question function
function question1() {

    // New div to append newly created buttons for our answer options
    var newDiv = $("<div class='new-Div'>");

    // Here's the buttons we need along with what they need to say
    var newButton1 = $("<button type='button' id='answer1'>").text(questions[0].choices[0]);
    var newButton2 = $("<button type='button' id='answer2'>").text(questions[0].choices[1]);
    var newButton3 = $("<button type='button' id='answer3'>").text(questions[0].choices[2]);
    var newButton4 = $("<button type='button' id='answer4'>").text(questions[0].choices[3]);
    $(".buttons, #time-remaining, #question").show();

    // Inserts the question into the proper element
    $("#question").html(questions[0].question);

    // Appended the buttons to the new div
    newDiv.append(newButton1);
    newDiv.append(newButton2);
    newDiv.append(newButton3);
    newDiv.append(newButton4);

    // Appended the new div to the proper element
    $("#question").append(newDiv);

    // Starts the timer
    timer();

    // Our timer function for question 1
    function timer() {

        // Set our time limit to 15 seconds
        number = 15;
        $("#time-remaining span").html(number);
        if (!clockRunning) {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            clockRunning = true;
        };

        // This function ensures our timer goes down by 1 second every second
        function decrement() {
            number--;
            console.log(number);
            $("#time-remaining span").html(number);

            // When time runs out, ends the question with an incorrect message
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[0].choices[0]);
                $("#question").append("<img class='images' src='assets/images/timesup.webp'>");
                unanswered++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                console.log("Unanswered: " + unanswered);
                setTimeout(function() {

                    // Jumps to question 2 after 3 seconds
                    question2();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        
        // Determine whether answer clicked was correct, incorrect
        if (this.id == "answer1") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            $("#question").append("<img class='images' src='assets/images/correct.webp'>");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                question2();
            }, 3000);
        }
        else if (this.id == "#answer2", "#answer3", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Incorrect! The correct answer was " + questions[0].choices[0]);
            $("#question").append("<img class='images' src='assets/images/incorrect.gif'>");
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                question2();
            }, 3000);
        };
    });
};

// The rest of the questions are the same as before
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
        number = 15;
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
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[1].choices[2]);
                $("#question").append("<img class='images' src='assets/images/timesup.webp'>");
                unanswered++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                console.log("Unanswered: " + unanswered);
                setTimeout(function() {
                    question3();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        if (this.id == "answer3") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            $("#question").append("<img class='images' src='assets/images/correct.webp'>");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                question3();
            }, 3000);
        }
        else if (this.id == "#answer1", "#answer2", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Incorrect! The correct answer was " + questions[1].choices[2]);
            $("#question").append("<img class='images' src='assets/images/incorrect.gif'>");
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
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
    function timer() {
        number = 15;
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
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[2].choices[2]);
                $("#question").append("<img class='images' src='assets/images/timesup.webp'>");
                unanswered++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                console.log("Unanswered: " + unanswered);
                setTimeout(function() {
                    question4();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        if (this.id == "answer3") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer1, #answer2, #answer4").hide();
            $("#question").html("Correct!");
            $("#question").append("<img class='images' src='assets/images/correct.webp'>");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                question4();
            }, 3000);
        }
        else if (this.id == "#answer2", "#answer3", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Incorrect! The correct answer was " + questions[2].choices[2]);
            $("#question").append("<img class='images' src='assets/images/incorrect.gif'>");
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
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
    function timer() {
        number = 15;
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
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[3].choices[3]);
                $("#question").append("<img class='images' src='assets/images/timesup.webp'>");
                unanswered++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                console.log("Unanswered: " + unanswered);
                setTimeout(function() {
                    question5();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        if (this.id == "answer4") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            $("#question").append("<img class='images' src='assets/images/correct.webp'>");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                question5();
            }, 3000);
        }
        else if (this.id == "#answer1", "#answer2", "#answer3") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Incorrect! The correct answer was " + questions[3].choices[3]);
            $("#question").append("<img class='images' src='assets/images/incorrect.gif'>");
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
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
    function timer() {
        number = 15;
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
            if (number === 0) {
                stopClock();
                $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
                $("#question").html("Times Up! The correct answer was " + questions[4].choices[1]);
                $("#question").append("<img class='images' src='assets/images/timesup.webp'>");
                unanswered++;
                console.log("Correct: " + correct);
                console.log("Incorrect: " + incorrect);
                console.log("Unanswered: " + unanswered);
                setTimeout(function() {
                    gameOver();
                }, 3000);
            }
        };
    };

    $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
        if (this.id == "answer2") {
            stopClock();
            $("#time-remaining").hide();
            $("#answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Correct!");
            $("#question").append("<img class='images' src='assets/images/correct.webp'>");
            correct++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                gameOver();
            }, 3000);
        }
        else if (this.id == "#answer1", "#answer3", "#answer4") {
            stopClock();
            $("#time-remaining, #answer1, #answer2, #answer3, #answer4").hide();
            $("#question").html("Incorrect! The correct answer was " + questions[4].choices[1]);
            $("#question").append("<img class='images' src='assets/images/incorrect.gif'>");
            incorrect++;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
            setTimeout(function() {
                gameOver();
            }, 3000);
        };
    });
};

// Now we have our function for the end of game screen
function gameOver() {
    stopClock();
    $("#time-remaining, .buttons").hide();
    $("#question, #restart-button, #empty-div1, #empty-div2").show();
    $("#question").html("Game Over!");

    // Display our empty divs and put our final score inside
    $("#empty-div1").html("Correct Answers: " + correct);
    $("#empty-div2").html("Incorrect Answers: " + incorrect);
    $("#empty-div3").html("Unanswered: " + unanswered);

    // Calls the function to reset the game on the button click
    $("#restart-button").on("click", function() {
        resetGame();
    });
};

// Questions and Answers Array
var questions = [
    {
        question: "1. What planet is the Wookie homeworld?",
        choices: ["Kashyyyk", "Endor", "Naboo", "Mandalore"],
        answer: "Kashyyyk"
    },
    {
        question: "2. Who shot first?",
        choices: ["C3P0", "Greedo", "Han", "Yoda"],
        answer: "Han"
    },
    {
        question: "3. What was the name of Darth Vader's flagship Super Star Destroyer?",
        choices: ["Annihilator", "Eclipse", "Executor", "Admonitor"],
        answer: "Executor"
    },
    {
        question: "4. The Millennium Falcon made the Kessel Run in less than how many Parcecs?",
        choices: ["10", "8", "14", "12"],
        answer: "12"
    },
    {
        question: "5. Who was the politician secretly known as Darth Sidious that became Emperor and created the Galactic Empire?",
        choices: ["Wilhuff Tarkin", "Sheev Palpatine", "Mas Amedda", "Finis Valorum"],
        answer: "Sheev Palpatine"
    },
];