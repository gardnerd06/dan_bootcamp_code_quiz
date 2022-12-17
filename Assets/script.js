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
  "Which of these choices are not a Javascript data type?",
  "What year was Javascript launched",
  "Who is the father of JavaScript?",
  "What was the original name of Netscape's JavaScript engine?",
];

$("#questions").hide();

$(document).ready(function () {
  $("#start").click(function () {
    $("#questions").toggle();
    timerCountdown();
    setInterval(timerCountdown, 1000);
    quest();
  });
});

const startingminutes = 1;
let time = startingminutes * 60;

const countdownEl = document.getElementById("countdown");
console.log(countdownEl);

function timerCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 1 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;

  if (seconds === 0) {
    clearInterval(setInterval);
  }
}

function quest() {
  for (var i = 0, l = questarray.length; i < l; i++) {
    if ((questarray[0] = i)) {
      $("#questions").append(index, Value);
    }
    console.log(i);
  }
}

// $.each(questarray, function (i, value) {
// $("#questions").append(i + ":" + value);
