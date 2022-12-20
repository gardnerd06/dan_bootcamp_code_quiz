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
var username = document.querySelectorAll("user");
const countdownEl = document.getElementById("countdown");
var i = 0;

$("#questions").hide();

const questarray = [
  "Space is not a Javascript data type?",
  "Javascript was invented in 1999.",
  "Javascript is named after Java.",
  "SpiderMonkey was the original name of Netscape's JavaScript engine.",
  "Assignment is not an operator of Javascript.",
  "Brendan Eich is the father of JavaScript.",
  "Javascript only works on Windows computers.",
  "ECMA is the name of the group that publishes JS.",
];

const answerkey = [
  "TRUE",
  "FALSE",
  "TRUE",
  "TRUE",
  "FALSE",
  "TRUE",
  "FALSE",
  "True",
];

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
document.getElementById("user").addEventListener("submit", function (event) {
  event.preventDefault();
  retrieve();
});

function cycle() {
  var inputVal = document.querySelectorAll("input")[0].value;
  var w = 0;
  var c = 0;
  var score = "";
  console.log(inputVal);
  if (inputVal === answerkey[i]) {
    ++i;
    document.getElementById("quiz").innerHTML = questarray[i];
  } else if (i > 5) {
    $("#countdown").hide();
    $("label").hide();
    document.getElementById("quiz").innerHTML = "PLEASE ENTER YOUR INITIALS!";
    time = 00;
    localStorage.setItem("totalques", i);
    $("#choice").hide();
  } else {
    var w = 0;
    alert("You are incorrect! Try again!");
    ++w;
    time -= 30;
    ++i;
    document.getElementById("quiz").innerHTML = questarray[i];
    localStorage.setItem("wrong", w);
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

function store() {
  var name = document.getElementById("player").value;
  localStorage.setItem("username", name);
  console.log(name);
}

function retrieve() {
  const leader = localStorage.getItem("username");
  const quez = localStorage.getItem("totalques");
  const incorrect = localStorage.getItem("wrong");
  var final = !incorrect - -6 + "OUT OF" + quez;
  console.log(incorrect);
  console.log(final);
  document.getElementById("leader").innerHTML = leader;
  document.getElementById("final").innerHTML = final;
}
