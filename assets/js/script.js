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






var gameBox = document.getElementById('gameBox')

var qs = document.getElementById("q1") // this is our question ties to HTML

// boxes/choices
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')

var questions = [ 
  {
    questions: "Who is the Captain of The Pillar of Autumn in Halo: CE?",
    choices: ["Captain Bridges", "Captain Keyes", "Commander Cody", "Captain Underpants"],
    answer: "Captain Keyes"
  },  
  {
    questions: "What is the Name of the ringworld in the game Halo: CE takes place called?",
    choices: ["Installation 04", "Onyx", "Jeff", "Halo"],
    answer: "Installation 04"
  },
  {
    questions: "Who is the Main character in first Halo Trilogy?",
    choices: ["Cortana", "Stg. Johnson", "Captain Keyes", "Master Chief"],
    answer: "Master Chief"
  },
  {
    questions: "Where does Halo 2 start?",
    choices: ["Earth", "Installation 04", "The Ark", "Mars"],
    answer: "Earth"
  },
  {
    questions: "What Parasite do you fight in the Halo Trilogy?",
    choices: ["Spiders", "The Flood", "The Creed", "The Ligmas"],
    answer: "The Flood"
  },
  {
    questions: "Who's Master Chief's main companion in the Halo series?",
    choices: ["The Arbiter", "Captain Keyes", "The Flood", "Cortana"],
    answer: "Cortana"
  },
]

console.log(questions[0]);
// local storage with classmates


// create a function that goes into our arrray and displays questions and choices based off of our questions array

function quiz() {
  qs.textContent = questions[0].questions
  // time interval up here

  a.textContent = questions[0].choices[0];
  b.textContent = questions[0].choices[1];
  c.textContent = questions[0].choices[2];
  d.textContent = questions[0].choices[3];

}
// onces interval is set up then subtract time
function checkAnswer(event) {
  if(event.target.textContent === questions[0].answer) {
    nextQuestion()
  } else if (event.target.textContent === questions[1].answer) {
   
  } else if (event.target.textContent === questions[2].answer) {
   
  } else if (event.target.textContent === questions[3].answer) {
    
  } else if (event.target.textContent === questions[4].answer) {

  } else if (event.target.textContent === questions[5].answer) {

  
}}
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





quiz()
// detect if the clicked button is the correct answer or not. then move on to the next question.



// if (selctedChoice.textContent === questions[0].answer) {
//   nextQuestion();
// }

// nextQuestion.addEventListener("clicl")

a.addEventListener('click', checkAnswer)
b.addEventListener('click', checkAnswer)
c.addEventListener('click', checkAnswer)
d.addEventListener('click', checkAnswer)
}
