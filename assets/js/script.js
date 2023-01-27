// variable assignment
var startButton = document.querySelector("#start");
var highScoreButton = document.querySelector("#highscores");
var title = document.querySelector("h1");
var paragraph = document.querySelector("p");
var main = document.querySelector("main");

var question = document.createElement("h2");
var selectionsList = document.createElement("ul");
var selections1 = document.createElement("li");
var selections2 = document.createElement("li");
var selections3 = document.createElement("li");
var selections4 = document.createElement("li");
var selBut1 = document.createElement("button");
var selBut2 = document.createElement("button");
var selBut3 = document.createElement("button");
var selBut4 = document.createElement("button");

//Stores all of the questions and their respective options and answer
var questionList = {
  q1: {
    question: "Which line uses jQuery to CREATE an element?",
    options: ["document.createElement('p');", "$('<p>');", "element.text('p');", "element.on('click', function(){});"],
    answer: "$('<p>');"
  } ,
  q2: {
    question: "The <script> tag needs to be placed in the external Javascript file.",
    options: ["True", "False"],
    answer: "False"
  } ,
  q3: {
    question: "Which line of code displays 'Hello world!' to the console in Javascript?",
    options: ["console.log('Hello world!');", "print('Hello world!');", "write - Hello World!", "console('Hello world!');"],
    answer: "console.log('Hello world!');"
  } ,
  q4: {
    question: "How do you create a function?",
    options: ["createfunct(){}", "function() {}", "func() {}", "function::myFunction() {}"],
    answer: "function() {}"
  } ,
  q5: {
    question: "What HTML tag do we use to put the Javascript?" ,
    options: ["<javascript>", "<link>", "<script>", "<js>"],
    answer: "<script>"
  } ,
  q6: {
    question: "What does document.querySelectorAll('li'); do?",
    options: ["Removes all the list elements from the page", "Creates a new list element", 
    "Appends a list element to another element", "Selects all of the list elements in the DOM"],
    answer: "Selects all of the list elements in the DOM"
  } ,
  q7: {
    question: "jQuery is a ____",
    options: ["GUI", "IDE", "API", "DOM"],
    answer: "API"
  } ,
  q8: {
    question: "Which of the following is a correctly written for loop?",
    options: ["for (i++){}", "for (var i = 0; i; i + 1){}", "for (var i = 0; i < 5; i++){}", "for (i <= 3; i++){}"],
    answer: "for (var i = 0; i < 5; i++){}"
  } ,
  q9: {
    question: "How do you add a comment in Javascript?",
    options: ["//", "/* */", "`", "<!-- -->"],
    answer: "//"
  } ,
  q10: {
    question: "Event listener is a ______",
    options: ["Library", "Method", "Object", "Variable"],
    answer: "Method"
  }
};

function startGame() {
  //Remove all container elements and aside elements to remove them from flow
  startButton.setAttribute("style", "display: none;");
  highScoreButton.setAttribute("style", "display: none");
  paragraph.setAttribute("style", "display: none");
  //Change styles of buttons
  selBut1.setAttribute("style", "margin: 15px auto; width: 50%;")
  selBut2.setAttribute("style", "margin: 15px auto; width: 50%;")
  selBut3.setAttribute("style", "margin: 15px auto; width: 50%;")
  selBut4.setAttribute("style", "margin: 15px auto; width: 50%;")
  //Call addQuestions to view the content on the DOM
  addQuestions();
  //Call randQuestion and use the value to determine which question is being displayed
  var questionNum = randQuestion();
  setListContent(questionNum);
}
//Sets the content for the question being asked
function setListContent(questionNum) {
  if (questionNum === 1) {
    
    title.textContent = questionList.q1.question
    selBut1.textContent = "1. A";
    selBut2.textContent = "2. B";
    selBut3.textContent = "3. C";
    selBut4.textContent = "4. D";
  }
}
//Add the question, selectionsList, selections elements, and their respective buttons to the DOM
function addQuestions() {
  main.appendChild(question);
  main.appendChild(selectionsList);
  selectionsList.appendChild(selections1);
  selectionsList.appendChild(selections2);
  selectionsList.appendChild(selections3);
  selectionsList.appendChild(selections4);
  selections1.appendChild(selBut1);
  selections2.appendChild(selBut2);
  selections3.appendChild(selBut3);
  selections4.appendChild(selBut4);
}

//Brings user to next question after correct answer
function onAnswer() {

}

//Returns a random number from 1-10
function randQuestion() {
  return Math.floor(Math.random() * 10);
}
//starts the quiz
startButton.addEventListener("click", startGame)

@@
// highScoreButton.addEventListener("click", showLeaderboard)