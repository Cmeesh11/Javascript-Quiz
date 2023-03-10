// Variable assignment
var startButton = document.querySelector("#start");
var highScoreButton = document.querySelector("#highscores");
var title = document.querySelector("h1");
var paragraph = document.querySelector("p");
var main = document.querySelector(".content");
var aside = document.querySelector("aside");
var timerEl = document.createElement("p");
var scoreEl = document.createElement("p");
var timerFunc;
var initials;
var submit;
var form;
var userScore;
var highscores = [];
var scoresList = [];

var selection;
var selBut;
var questionNum;
// Sets score and timer to initial values
var score = 0;
var timer = 60;

var question = document.createElement("h2");
var selectionsList = document.createElement("ul");

// Stores all of the questions and their respective options and answer
var questionList = [
  {
    question: "Which line uses jQuery to CREATE an element?",
    options: ["document.createElement('p');", "$('<p>');", "element.text('p');", "element.on('click', function(){});"],
    answer: "$('<p>');"
  } ,
  {
    question: "The <script> tag needs to be placed in the external Javascript file.",
    options: ["True", "False"],
    answer: "False"
  } ,
  {
    question: "Which line of code displays 'Hello world!' to the console in Javascript?",
    options: ["console.log('Hello world!');", "print('Hello world!');", "write - Hello World!", "console('Hello world!');"],
    answer: "console.log('Hello world!');"
  } ,
  {
    question: "How do you create a function?",
    options: ["createfunct(){}", "function() {}", "func() {}", "function::myFunction() {}"],
    answer: "function() {}"
  } ,
  {
    question: "What HTML tag do we use to put the Javascript?" ,
    options: ["<javascript>", "<link>", "<script>", "<js>"],
    answer: "<script>"
  } ,
  {
    question: "What does document.querySelectorAll('li'); do?",
    options: ["Removes all the list elements from the page", "Creates a new list element", 
    "Appends a list element to another element", "Selects all of the list elements in the DOM"],
    answer: "Selects all of the list elements in the DOM"
  } ,
  {
    question: "jQuery is a(n) ____",
    options: ["GUI", "IDE", "API", "DOM"],
    answer: "API"
  } ,
  {
    question: "Which of the following is a correctly written for loop?",
    options: ["for (i++){}", "for (var i = 0; i; i + 1){}", "for (var i = 0; i < 5; i++){}", "for (i <= 3; i++){}"],
    answer: "for (var i = 0; i < 5; i++){}"
  } ,
  {
    question: "How do you add a comment in Javascript?",
    options: ["//", "/* */", "`", "<!-- -->"],
    answer: "//"
  } ,
  {
    question: "Event listener is a(n) ______.",
    options: ["Library", "Method", "Object", "Variable"],
    answer: "Method"
  }
];

function startGame() {
  // Remove all container elements and aside elements to remove them from flow
  startButton.setAttribute("style", "display: none;");
  highScoreButton.setAttribute("style", "display: none");
  paragraph.setAttribute("style", "display: none");
  addElements();
  makeNextQuestion();
}
function addElements() {
  // Adds styles and text content for the timer and score elements and appends them to aside
  timerEl.setAttribute("style", "color: red");
  scoreEl.setAttribute("style", "color: red");
  timerEl.textContent = "Time: " + timer;
  scoreEl.textContent = "Score: " + score;
  aside.appendChild(timerEl);
  aside.appendChild(scoreEl);
}
// Brings user to next question after correct answer
function makeNextQuestion() {
  // Call randQuestion and use the value to determine which question is being displayed
  questionNum = randQuestion();
  setListContent(questionNum);
}

function randQuestion() {
  // Returns a random number based on the questionLists length
  return Math.floor(Math.random() * questionList.length);
}
// Sets the content for the question being asked
function setListContent(questionNum) {
  // Appends the ul to the main tag
  main.appendChild(selectionsList);
  // Changes the title element to the content of the question item
  title.textContent = questionList[questionNum].question;
  for (var i = 0; i < questionList[questionNum].options.length; i++) {
      // Creating number of list items and buttons equal to the number of options in question
      selection = document.createElement("li");
      selBut = document.createElement("button");
      // Change styles of buttons
      selection.setAttribute("style", "text-align: center;")
      selBut.setAttribute("style", "margin: 15px auto; width: 100%;");
      // Gives buttons class name of 'button'
      selBut.className = "option";
      // Sets text of the buttons to the content of options array
      selBut.textContent = questionList[questionNum].options[i];
      // Appends the list items to the ul and the buttons to the list items
      selectionsList.appendChild(selection);
      selection.appendChild(selBut);
    }
  }
// Determines point increase or timer decrease
function onAnswer(button, questionNum) {
  if (button.textContent === questionList[questionNum].answer) {
    score += 10;
  } else {
    timer -= 10;
    timerEl.textContent = "Time: " + timer;
  }
  // Removes question from array
  questionList.splice(questionNum, 1);
  // Clears HTML elements inside of ul
  selectionsList.innerHTML = '';
  // Updates score
  scoreEl.textContent = "Score: " + score;
  // Ends game if all questions are asked
  if (questionList.length === 0) {
     return endGame();
  }
  makeNextQuestion();
}

function endGame() {
  // Ensures that timer stops
  clearInterval(timerFunc);
  // Removes timer element and moves score element
  timerEl.remove();
  scoreEl.setAttribute("style", "font-size: 2em; color: red;");
  main.appendChild(scoreEl);
  // Changes title to "results"
  title.innerHTML = "Results:";
  // Removes content within ul
  selectionsList.innerHTML = '';
  // Creates a form element, an input element, and submit button for entering initials
  form = document.createElement("form");
  initials = document.createElement("input");
  initials.setAttribute("type", "text");
  initials.setAttribute("placeholder", "Enter Name/Initials");
  initials.setAttribute("style", "font-size: 2em;")
  submit = document.createElement("button");
  submit.setAttribute("style", "display: block; margin: 0 auto; width: 20%; padding: 0;")
  submit.textContent = "Submit";
  main.appendChild(form);
  form.appendChild(initials);
  form.appendChild(submit);
  }

  function showLeaderboard() {
    main.textContent = '';
    aside.textContent = '';
    // Create a new h1 element saying highscores
    var highscoresTitle = document.createElement("h1");
    highscoresTitle.textContent = "High Scores";
    main.appendChild(highscoresTitle);
    // Create a go back button and a reset highscores button
    var reset = document.createElement("button");
    var back = document.createElement("button");
    reset.setAttribute("style", "width: 50%; padding: 0; margin: 10% auto;");
    back.setAttribute("style", "width: 50%; padding: 0; margin: 10% auto;")
    reset.className = "reset";
    back.className = "back";
    reset.textContent = "Reset highscores";
    back.textContent = "Back";
  
    // Create ordered list to put lis in
    var highscoresList = document.createElement("ul");
    main.appendChild(highscoresList);
    // Convert highscores localStorage item from string into array
    highscores = JSON.parse(localStorage.getItem("scoresList"));
    if (highscores == null || highscores.length == 0) {
      var noScores = document.createElement("span");
      var backButton = document.createElement("button");
      noScores.setAttribute("style", "display: block;");
      backButton.setAttribute("style", "display: block; margin: 10% auto; width: 20%; padding: 0;")
      backButton.className = "back";
      backButton.textContent = "Back";
      noScores.textContent = "There are currently no scores submitted"
      main.appendChild(noScores);
      main.appendChild(backButton);
    }
    // Bubble sort on the highscores array
    for (var i = 0; i < highscores.length; i ++) {
      for (var j = 0; j < highscores.length - 1 - i; j++) {
        if (highscores[j].score < highscores[j + 1].score) {
          var temp = highscores[j];
          highscores[j] = highscores[j + 1];
          highscores[j + 1] = temp;
        }
      }
    }
    // Create li elements to put scores in assigning it a value, and appending it to ul
    for (var i = 0; i < highscores.length; i++) {
      var highscoreItem = document.createElement("li");
      highscoreItem.setAttribute("style", "color: red; font-size: 2em;");
      highscoreItem.textContent = (i + 1) + ". " + highscores[i].initials + "- " + "Score: " + highscores[i].score;
      highscoresList.appendChild(highscoreItem);
    }
    main.appendChild(back);
    main.appendChild(reset);
  }

//starts the quiz
startButton.addEventListener("click", function() {
  startGame();
  // Starts the timer
  timerFunc = setInterval(function() {
    timer--;
    timerEl.textContent = "Time: " + timer;
    if (timer <= 0) {
      clearInterval(timerFunc);
      return endGame();
    }
  }, 1000);
});
//Listens to one of the generated buttons
selectionsList.addEventListener("click", function (event) {
  var button = event.target;
  if (button.className === 'option') {
    onAnswer(button, questionNum);
  } else {
    return;
  } 
});

// Checks for form submit and stores values in localStorage
main.addEventListener("submit", function(event) {
  event.preventDefault();
  // Check to see if entered value is blank
  if (initials.value == '') {
    return;
  }
  var existingEntries = JSON.parse(localStorage.getItem("scoresList"));
  if (existingEntries == null) {
    existingEntries = [];
  }
  userScore = {
    initials: initials.value.trim(),
    score: score
    };
    
  localStorage.setItem("score", JSON.stringify(userScore));
  existingEntries.push(userScore);
  localStorage.setItem("scoresList", JSON.stringify(existingEntries));
  document.location.reload(true);
  });

  // Brings user to highscores page on highscore button click
  highScoreButton.addEventListener("click", showLeaderboard);

  // Brings user back to start page when they click the back button in the highscores menu
  main.addEventListener("click", function (event) {
    var element = event.target;
    if (element.className === "back") {
      document.location.reload(true);
    } else {
      return;
    }
  })
  // Reset highscores
  main.addEventListener("click", function(event) {
    var element = event.target;
    if (element.className == "reset") {
      localStorage.clear();
      showLeaderboard();
    }
  })