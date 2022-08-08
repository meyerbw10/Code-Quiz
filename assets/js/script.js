

// OVERALL: I want a page that has a solo start button (Event listener) and when it is clicked it starts the quiz. I want to have a question (Variable) that is displayed on screen. i want to have the choices(Variable) displayed with the question and timer(Variable?) that is ticking down 1 per second. i want to have a funtion that takes my questions and links them up with a pool of answers. when clicking on the wrong answer, the timer goes down 5 seconds. and when the right answer is clicked the next question and choices are displayed (Another function). I need to store the answers and tag them with a score. and then when the quiz is complete or the timer reaches 0 i need a page to display that shows a score and allows input for name (local storage?) and takes that information and displays it on a board (list displayed 1-5) and a play again button.

var gameBox = document.getElementById('gameBox')
var qs = document.getElementById('qs') // this is how our question ties to HTML
var timerElement = document.getElementById('timer')
var startPage = document.getElementById('startPage')
var startGame = document.getElementById('startGame')
var scores = []

var timer;
var timerCount;

// boxes/choices
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')


// Our string of questions & answers
var questions = [ 
  { // 0
    questions: "Who is the Captain of The Pillar of Autumn in Halo: CE?",
    choices: ["Captain Bridges", "Captain Keyes", "Commander Cody", "Captain Underpants"],
    answer: "Captain Keyes"
  },  
  { //1
    questions: "What is the Name of the ringworld in the game Halo: CE takes place called?",
    choices: ["Installation 04", "Onyx", "Jeff", "Halo"],
    answer: "Installation 04"
  },
  { //2
    questions: "Who is the Main character in first Halo Trilogy?",
    choices: ["Cortana", "Stg. Johnson", "Captain Keyes", "Master Chief"],
    answer: "Master Chief"
  },
  {// 3
    questions: "Where does Halo 2 start?",
    choices: ["Earth", "Installation 04", "The Ark", "Mars"],
    answer: "Earth"
  },
  { // 4
    questions: "What Parasite do you fight in the Halo Trilogy?",
    choices: ["Spiders", "The Flood", "The Creed", "The Ligmas"],
    answer: "The Flood"
  },
  { //5
    questions: "Who's Master Chief's main companion in the Halo series?",
    choices: ["The Arbiter", "Captain Keyes", "The Flood", "Cortana"],
    answer: "Cortana"
  },
]



// ^^^^ function that when start button is hit then it runs the quiz?


// create a function that goes into our arrray and displays questions and choices based off of our questions array

function quiz() {
  // timer setInterval(60 seconds i--)
  qs.textContent = questions[0].questions;

  a.textContent = questions[0].choices[0];
  b.textContent = questions[0].choices[1];
  c.textContent = questions[0].choices[2];
  d.textContent = questions[0].choices[3];

}
// onces interval is set up then subtract time
function checkAnswer(event) {
  if(event.target.textContent === questions[0].answer) {
    nextQuestion()
  } else {
    quiz()
    // subtract time and run question again
  }
  
}
// make sure my answer boxes choices dont link up to the same box
function nextQuestion() {

  qs.textContent = questions[1].questions


  a.textContent = questions[1].choices[0];
  b.textContent = questions[1].choices[1];
  c.textContent = questions[1].choices[2];
  d.textContent = questions[1].choices[3];
}

function checkAnswer(event) {
  if(event.target.textContent === questions[1].answer) {
    nextQuestion()
  }




}
quiz()
// detect if the clicked button is the correct answer or not. then move on to the next question.



if (questions.textContent === questions[0].answer) {
  nextQuestion();
// }

// nextQuestion.addEventListener("clicl")

a.addEventListener('click', checkAnswer)
b.addEventListener('click', checkAnswer)
c.addEventListener('click', checkAnswer)
d.addEventListener('click', checkAnswer)
}

// local storage with classmates / need to store information locally 
// how to store mulitple var fullInput/ objects is important to code quiz





// ACEPTENCE CRITIREA

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


// ------- ----------


// COMMENTS ON QUIZ

// Landing page
  // I need a start button
  // Description of app: welcome to my quiz, this is how it works sort of thing
  // I need an event listener on start button -- listening for clicks
  // When you click the start button, the landing page disappears and the first question & answers appears AND the timer appears and starts counting down
// Need a timer that counts down
// I need a set of questions -- array of objects
  // ? What do the questions need to include?
  // Question text -- string
  // Set of answers -- array of strings
  // Some way to check whether the answer is correct -- give the string OR the index of the correct answer
    // ! Some way to track whether the answer the user selected is the correct answer -- does NOT need to be with the other question info
// Need a way to display the question text, answers, and the answers need to be clickable
// When you click an answer
  // Compares the answer you chose to the correct answer
  // Displays some kind of feedback based on whether the selected answer is correct or incorrect
  // If the answer is incorrect, time is subtracted from the clock
  // Regardless whether the answer is correct or incorrect, the current question disappears and the next question appears UNLESS the user is on the final question
  // If the user is on the last question, once they select an answer, they're presented with a form to enter their initials
  // Initials and remaining time is saved to local storage as the score

// Game ends when all questions are answered OR the timer reaches 0 -- is there a case where the timer might go lower than 0 that needs to be accounted for?




// function startTimer () {
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       if (isWin && timerCount > 0) {
//         clearInterval(timer);
//       }
//     }
//     if (timerCount === 0) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }