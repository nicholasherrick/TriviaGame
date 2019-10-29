$(document).ready( function() {

    var answer1 = $("#answer1");
    var answer2 = $("#answer2");
    var answer3 = $("#answer3");
    var answer4 = $("#answer4");

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
    ]
    var correct = 0;

    for (var i = 0; i < questions.length; i++) {
        var questionFeeder = questions[i];
    }



});