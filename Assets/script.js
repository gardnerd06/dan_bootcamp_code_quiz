//when i click the start buttton I want to be asked a series of questions
// when i click start I want a timer to start and display in the quiz
//I want right and wrong answers to dynamically update
//I want the recorded totals to be displayed in a leaderboard stored in local storage
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
const questarray = [
  "Which of these choices are not a Javascript data type? <br> 1.Boolean 2.String 3.Numbers 4.Space ",
  "What year was Javascript invented? <br> 1.1995 2.1900 3.2001 4.1988",
  "Who is the father of JavaScript? <br> 1.Brendan Eich 2.Brendan Fraiser 3.Lebron James 4.Bill Gates",
  "What was the original name of Netscape's JavaScript engine? <br> 1.Bananbox 2.Spidermonkey 3.Donkeypot 4.Netscape",
  "Which of the following is not an operator? <br> 1.Addition 2.Division 3.Extraction 4.Assignment",
];

const answerkey = [4, 1, 1, 2, 3];

$("#questions").hide();

$(document).ready(function () {
  $("#start").click(function () {
    $("#questions").toggle();
    timerCountdown();
    setInterval(timerCountdown, 1000);
  });
});

const startingminutes = 5;
let time = startingminutes * 60;

const countdownEl = document.getElementById("countdown");

function timerCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 1 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
document
  .getElementById("questions")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
var i = 0;
document.getElementById("quiz").innerHTML = questarray[i];
function cycle() {
  var inputVal = document.querySelectorAll("input")[0].value;
  while (inputVal == answerkey[i]) {
    ++i;
    document.getElementById("quiz").innerHTML = questarray[i];
  }
  if (i == 5) {
    time = 0;
    $("#countdown").hide();
    document.getElementById("quiz").innerHTML = "GOOD WORK!";
    return false;
  }
}

// $.each(questarray, function (i, value) {
// $("#questions").append(i + ":" + value);

// added color change text for styling purposes
// const checkFilled = (input) => {
//   if (!input.value) {
//     input.style.backgroundColor = "yellow";
//   } else {
//     input.style.backgroundColor = null;
//   }
// };

// const input = document.querySelector("input");
// input.onchange = (e) => {
//   checkFilled(e.target);
// };
// checkFilled(input);
