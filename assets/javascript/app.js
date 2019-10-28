// Load html first

$(document).ready( function go() {

    // hide everything except for start button
    $("#time-remaining").hide();
    $("#question").hide();
    $("#restart-button").hide();
    $("#empty-div1").hide();
    $("#empty-div2").hide();
    $("#start-button").show();

    // Start the game on a button click
    $("#start-button").on("click", function () {
        $("#start-button").hide();
        $("#time-remaining").show();
        $("#question").show();

        // Declare variables for number timer and interval
        var clockRunning = false;
        var number = 30;
        var intervalId;

        // Resets the clock
        function resetClock() {
            number = 30;
            $("#time-remaining span").html(number);
            clockRunning = false;
        };

        // Add run function to set the interval
        function run() {
            if (!clockRunning) {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
                clockRunning = true;
            };
        };

        // Add function to stop timer
        function stop() {
            clearInterval(intervalId);
            clockRunning = false;
        };

        // Add the question timer
        function decrement() {
            number--;
            console.log(number);
            $("#time-remaining span").html(number);
            if (number === 0) {
                stop();
                $("#question").html("Times Up!");
                $("#answer1").hide();
                $("#answer2").hide();
                $("#answer3").hide();
                $("#answer4").hide();
                setTimeout(function() {
                    questionIncorrect();
                }, 3000);

            };
        };

        // Start question 1
        question1();
        function question1 () {
            resetClock();
            run();
            $("#question").html("1. What is 2 + 2?");
            // Add .show so the answer choices appear again after a game reset
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#answer1").html('<button type="button">4</button>');
            $("#answer2").html('<button type="button">0</button>');
            $("#answer3").html('<button type="button">8</button>');
            $("#answer4").html('<button type="button">2</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer1") {
                    stop();
                    questionCorrect();
                }
                else if (this.id == "#answer2", "#answer3", "#answer4") {
                    stop();
                    $("#question").html("Incorrect!");
                    $("#time-remaining").hide();
                    $("#answer1").hide();
                    $("#answer2").hide();
                    $("#answer3").hide();
                    $("#answer4").hide();
                    setTimeout(function() {
                        questionIncorrect();
                    }, 3000);

                };
            });
        };

        // Question 1 correct screen
        function questionCorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // correct++;
            // console.log(correct);
            $("#question").html("Correct!");
            setTimeout(function() {
                question2();
            }, 3000);
        };

        // Question 1 incorrect screen
        function questionIncorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // incorrect++;
            // console.log(incorrect);
            $("#question").html("The Correct answer was: 4");
            setTimeout(function() {
                question2();
            }, 3000);
        };

        // Start question 2
        function question2 () {
            // Declare variables for number timer and interval
            resetClock();
            run();
            $("#restart-button").hide();
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#question").html("2. What is 9 * 0?");
            $("#answer1").html('<button type="button">9</button>');
            $("#answer2").html('<button type="button">-9</button>');
            $("#answer3").html('<button type="button">0</button>');
            $("#answer4").html('<button type="button">18</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer3") {
                    stop();
                    questionCorrect();
                }
                else if (this.id == "#answer1", "#answer2", "#answer4") {
                    stop();
                    $("#question").html("Incorrect!");
                    $("#time-remaining").hide();
                    $("#answer1").hide();
                    $("#answer2").hide();
                    $("#answer3").hide();
                    $("#answer4").hide();
                    setTimeout(function() {
                        question2Incorrect();
                    }, 3000);
                };
                stop();
            });
        };

        // Question 2 correct screen
        function questionCorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // correct++;
            // console.log(correct);
            $("#question").html("Correct!");
            setTimeout(function() {
                question3();
            }, 3000);
        };

        // Question 2 incorrect screen
        function questionIncorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // incorrect++;
            // console.log(incorrect);
            $("#question").html("The Correct answer was: 0");
            setTimeout(function() {
                question3();
            }, 3000);
        };

        // Start question 3
        function question3 () {
            // Declare variables for number timer and interval
            resetClock();
            run();
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#question").html("3. What is 17 - 21?");
            $("#answer1").html('<button type="button">-6</button>');
            $("#answer2").html('<button type="button">6</button>');
            $("#answer3").html('<button type="button">-4</button>');
            $("#answer4").html('<button type="button">4</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer3") {
                    stop();
                    question3Correct();
                }
                else if (this.id == "#answer1", "#answer2", "#answer4") {
                    stop3();
                    $("#question").html("Incorrect!");
                    $("#time-remaining").hide();
                    $("#answer1").hide();
                    $("#answer2").hide();
                    $("#answer3").hide();
                    $("#answer4").hide();
                    setTimeout(function() {
                        question3Incorrect();
                    }, 3000);
                };
                stop();
            });
        };

        // Question 3 correct screen
        function question3Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // correct++;
            // console.log(correct);
            $("#question").html("Correct!");
            setTimeout(function() {
                question4();
            }, 3000);
        };

        // Question 3 incorrect screen
        function question3Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // incorrect++;
            // console.log(incorrect);
            $("#question").html("The Correct answer was: -4");
            setTimeout(function() {
                question4();
            }, 3000);
        };

        // Start question 4
        function question4 () {
            resetClock();
            run();
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#question").html("4. What is 4 / .5?");
            $("#answer1").html('<button type="button">4</button>');
            $("#answer2").html('<button type="button">16</button>');
            $("#answer3").html('<button type="button">12</button>');
            $("#answer4").html('<button type="button">8</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer4") {
                    stop();
                    question4Correct();
                }
                else if (this.id == "#answer1", "#answer2", "#answer3") {
                    stop();
                    $("#question").html("Incorrect!");
                    $("#time-remaining").hide();
                    $("#answer1").hide();
                    $("#answer2").hide();
                    $("#answer3").hide();
                    $("#answer4").hide();
                    setTimeout(function() {
                        question4Incorrect();
                    }, 3000);
                };
                stop()
            });
        };

        // Question 4 correct screen
        function question4Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // correct++;
            // console.log(correct);
            $("#question").html("Correct!");
            setTimeout(function() {
                question5();
            }, 3000);
        };

        // Question 4 incorrect screen
        function question4Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // incorrect++;
            // console.log(incorrect);
            $("#question").html("The Correct answer was: 8");
            setTimeout(function() {
                question5();
            }, 3000);
        };

        // Start question 5
        function question5 () {
            resetClock();
            run();
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            $("#question").html("5. What is 164 - 112?");
            $("#answer1").html('<button type="button">84</button>');
            $("#answer2").html('<button type="button">52</button>');
            $("#answer3").html('<button type="button">48</button>');
            $("#answer4").html('<button type="button">62</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer2") {
                    stop();
                    question5Correct();
                }
                else if (this.id == "#answer1", "#answer3", "#answer4") {
                    stop();
                    $("#question").html("Incorrect!");
                    $("#time-remaining").hide();
                    $("#answer1").hide();
                    $("#answer2").hide();
                    $("#answer3").hide();
                    $("#answer4").hide();
                    setTimeout(function() {
                        question5Incorrect();
                    }, 3000);
                };
            });
        };

        // Question 5 correct screen
        function question5Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // correct++;
            // console.log(correct);
            $("#question").html("Correct!");
            setTimeout(function() {
                gameOver();
            }, 3000);
        };

        // Question 5 incorrect screen
        function question5Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            // incorrect++;
            // console.log(incorrect);
            $("#question").html("The Correct answer was: 52");
            setTimeout(function() {
                gameOver();
            }, 3000);
        };

        // After last question, display final score along with a restart button
        function gameOver() {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            $("#question").show();
            $("#restart-button").show();
            $("#question").html("Game Over!");
            $("#empty-div1").show();
            $("#empty-div2").show();
            // $("#empty-div1").append("Correct Answers: " + correct);
            // $("#empty-div2").append("Incorrect Answers: " + incorrect);
            $("#restart-button").on("click", function() {
                // resetGame();
                go();
            });
        };

    });




});