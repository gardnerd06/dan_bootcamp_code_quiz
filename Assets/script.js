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
const startingminutes = 3;
let time = startingminutes * 60;

const countdownEl = document.getElementById("countdown");
var i = 0;
var w = 0;

$("#questions").hide();

const questarray = [
  "Space is not a Javascript data type?",
  "Javascript was invented in 1999.",
  "Javascript is named after Java.",
  "SpiderMonkey was the original name of Netscape's JavaScript engine.",
  "Assignment is not an operator of Javascript.",
  "Brendan Eich is the father of JavaScript.",
  "Javascript only works on Windows computers.",
];

const answerkey = ["TRUE", "FALSE", "TRUE", "TRUE", "FALSE", "TRUE", "FALSE"];

document.getElementById("quiz").innerHTML = questarray[i];

$(document).ready(function () {
  $("#start").click(function () {
    $("#questions").toggle();
  });
});

$("#start").on("click", function () {
  timerCountdown();
  var interval = setInterval(timerCountdown, 1000);
  $(this).prop("disabled", true);
  if (time === 00) {
    console.log("out of time");
    clearInterval(interval);
  }
});

function timerCountdown() {
  const minutes = Math.floor(time / 60);
  var seconds = time % 60;
  seconds = seconds < 1 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}

document
  .getElementById("questions")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function cycle() {
  var inputVal = document.querySelectorAll("input")[0].value;

  console.log(inputVal);
  if (inputVal === answerkey[i]) {
    i++;
    console.log(i);
    document.getElementById("quiz").innerHTML = questarray[i];
  } else if (i >= 5) {
    $("#countdown").hide();
    $("label").hide();
    document.getElementById("quiz").innerHTML = "PLEASE ENTER YOUR INITIALS!";
    var score = "";
    time = 00;
  } else {
    alert("You are incorrect! Try again!");
    score = ++w;
    var total = -w * 5;
    console.log(score);
    time -= 30;
    ++i;
    document.getElementById("quiz").innerHTML = questarray[i];
    var totalscore = total + 100;
  }
}

//  added color change text for styling purposes
const checkFilled = (input) => {
  if (!input.value) {
    input.style.backgroundColor = "babyblue";
  } else {
    input.style.backgroundColor = "white";
  }
};

const input = document.querySelector("input");
input.onchange = (e) => {
  checkFilled(e.target);
};
checkFilled(input);
