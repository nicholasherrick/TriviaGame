// Load html first

$(document).ready( function() {

    // hide everything except for start button
    $("#time-remaining").hide();
    $("#question").hide();
    $("#answers").hide();
    $("#restart-button").hide();

    // Declare global variables
    var correct = 0;
    var incorrect = 0;


    // Start the game on a button click
    $("#start-button").on("click", function (startGame) {
        $("#start-button").hide();
        $("#time-remaining").show();
        $("#question").show();
        $("#answers").show();

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
            };
        };
        run();

        // Declare function question variables
        question1();
        function question1 () {
            $("#question").text("What is 2 + 2?");
            $("#answer1").append('<button type="button">4</button>');
            $("#answer2").append('<button type="button">0</button>');
            $("#answer3").append('<button type="button">8</button>');
            $("#answer4").append('<button type="button">2</button>');
            $("#answer1, #answer2, #answer3, #answer4").on("click", function () {
                if (this.id == "answer1") {
                    stop();
                    correct++;
                    alert("Correct!");
                    question1Correct();
                }
                else if (this.id == "#answer2", "#answer3", "#answer4") {
                    stop();
                    incorrect++;
                    alert("Incorrect!");
                    question1Incorrect();
                }
            });
        };

        // Display question 1 with timer

        // Determine whether answer was correct, incorrect, or time limit was reached

        // Log the results into a scorekeeper variable

        // Display next question, rinse and repeat

        // After last question, display final score along with a restart button

    });




});