// Load html first

$(document).ready( function() {

    // hide everything except for start button
    $("#time-remaining").hide();
    $("#question").hide();
    $("#answers").hide();
    $("#restart-button").hide();

    // Declare variables
    var correct = 0;
    var incorrect = 0;


    // Start the game on a button click
    $("#start-button").on("click", function (startGame) {
        $("#start-button").hide();
        $("#time-remaining").show();
        $("#question").show();

        // Declare variables
        var correct = 0;
        var incorrect = 0;

        // Declare variables for number timer and interval
        var number = 30;
        var intervalId;

        // Add run function to set the interval
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        };

        // Add function to stop timer
        function stop() {
            clearInterval(intervalId);
        }

        // Add the question timer
        function decrement() {
            number--;
            $("#time-remaining span").html(number);
            if (number === 0) {
                stop()
                alert("Times Up!")
                question1Incorrect();
            };
        };

        run();

        // Start question 1
        question1();
        function question1 () {
            $("#question").text("What is 2 + 2?");
            $("#answer1").append('<button type="button">4</button>');
            $("#answer2").append('<button type="button">0</button>');
            $("#answer3").append('<button type="button">8</button>');
            $("#answer4").append('<button type="button">2</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer1") {
                    stop();
                    question1Correct();
                }
                else if (this.id == "#answer2", "#answer3", "#answer4") {
                    stop();
                    question1Incorrect();
                }
            });
        };

        // Question 1 correct screen
        function question1Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            correct++;
            $("#question").text("Correct!");
            setTimeout(function() {
                question2();
            }, 3000);
        }

        // Question 1 incorrect screen
        function question1Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            incorrect++;
            $("#question").text("Incorrect!");
            setTimeout(function() {
                question2();
            }, 3000);
        }

        // Start question 2
        function question2 () {
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            run();
            $("#question").text("What is 9 * 0?");
            $("#answer1").html('<button type="button">9</button>');
            $("#answer2").html('<button type="button">-9</button>');
            $("#answer3").html('<button type="button">0</button>');
            $("#answer4").html('<button type="button">18</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                // Determine whether answer was correct, incorrect, or time limit was reached
                if (this.id == "answer3") {
                    stop();
                    question2Correct();
                }
                else if (this.id == "#answer1", "#answer2", "#answer4") {
                    stop();
                    question2Incorrect();
                }
            });
        };

        // Question 2 correct screen
        function question2Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            correct++;
            $("#question").text("Correct!");
            setTimeout(function() {
                question3();
            }, 3000);
        }

        // Question 2 incorrect screen
        function question2Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            incorrect++;
            $("#question").text("Incorrect!");
            setTimeout(function() {
                question3();
            }, 3000);
        }

        // Start question 3
        function question3 () {
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            run();
            $("#question").text("What is 17 - 21?");
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
                    stop();
                    question3Incorrect();
                }
            });
        };

        // Question 3 correct screen
        function question3Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            correct++;
            $("#question").text("Correct!");
            setTimeout(function() {
                question4();
            }, 3000);
        }

        // Question 3 incorrect screen
        function question3Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            incorrect++;
            $("#question").text("Incorrect!");
            setTimeout(function() {
                question4();
            }, 3000);
        }

        // Start question 4
        function question4 () {
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            run();
            $("#question").text("What is 4 / .5?");
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
                    question4Incorrect();
                }
            });
        };

        // Question 4 correct screen
        function question4Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            correct++;
            $("#question").text("Correct!");
            setTimeout(function() {
                question5();
            }, 3000);
        }

        // Question 4 incorrect screen
        function question4Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            incorrect++;
            $("#question").text("Incorrect!");
            setTimeout(function() {
                question5();
            }, 3000);
        }

        // Start question 5
        function question5 () {
            $("#time-remaining").show();
            $("#question").show();
            $("#answer1").show();
            $("#answer2").show();
            $("#answer3").show();
            $("#answer4").show();
            run();
            $("#question").text("What is 164 - 112?");
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
                    question5Incorrect();
                }
            });
        };

        // Question 5 correct screen
        function question5Correct () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            correct++;
            $("#question").text("Correct!");
            setTimeout(function() {
                gameOver();
            }, 3000);
        }

        // Question 5 incorrect screen
        function question5Incorrect () {
            $("#time-remaining").hide();
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            incorrect++;
            $("#question").text("Incorrect!");
            setTimeout(function() {
                gameOver();
            }, 3000);
        }



        // After last question, display final score along with a restart button

    });




});