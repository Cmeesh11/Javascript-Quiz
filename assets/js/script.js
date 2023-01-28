// variable assignment
var startButton = document.querySelector("#start");
var highScoreButton = document.querySelector("#highscores");
var title = document.querySelector("h1");
var paragraph = document.querySelector("p");
var main = document.querySelector("main");
var selection;
var selBut;

var question = document.createElement("h2");
var selectionsList = document.createElement("ul");


//Stores all of the questions and their respective options and answer
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
    question: "jQuery is a ____",
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
    question: "Event listener is a ______.",
    options: ["Library", "Method", "Object", "Variable"],
    answer: "Method"
  }
];

function startGame() {
  //Remove all container elements and aside elements to remove them from flow
  startButton.setAttribute("style", "display: none;");
  highScoreButton.setAttribute("style", "display: none");
  paragraph.setAttribute("style", "display: none");
  
  makeNextQuestion();
}
//Sets the content for the question being asked
function setListContent(questionNum) {
  //Appends the ul to the main tag
  main.appendChild(selectionsList);
  //Changes the title element to the content of the question item
  title.textContent = questionList[questionNum].question;
  for (var i = 0; i < questionList[questionNum].options.length; i++) {
      //creating number of list items and buttons equal to the number of options in question
      selection = document.createElement("li");
      selBut = document.createElement("button");
      //Change styles of buttons
      selection.setAttribute("style", "text-align: center;")
      selBut.setAttribute("style", "margin: 15px auto; width: 2em;");
      //Sets text of the buttons to the content of options array
      selBut.textContent = questionList[questionNum].options[i];
      //Appends the list items to the ul and the buttons to the list items
      selectionsList.appendChild(selection);
      selection.appendChild(selBut);
    }
    //unhiding elements
    selection.unhide();
    selBut.unhide();
    title.unhide();
  }


//Brings user to next question after correct answer
function makeNextQuestion() {
  //Clear existing elements
  if ((selection != null) && (selBut != null)) {
    selection.hide();
    selBut.hide();
    title.hide();
  }
  //Call randQuestion and use the value to determine which question is being displayed
  var questionNum = randQuestion();
  setListContent(questionNum);
}

//Returns a random number from 1-10
function randQuestion() {
  return Math.floor(Math.random() * 10);
}
//starts the quiz
startButton.addEventListener("click", startGame)

// highScoreButton.addEventListener("click", showLeaderboard)