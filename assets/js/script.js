
// OVERALL: I want a page that has a solo start button (Event listener) and when it is clicked it starts the quiz. I want to have a question (Variable) that is displayed on screen. i want to have the choices(Variable) displayed with the question and timer(Variable?) that is ticking down 1 per second. i want to have a funtion that takes my questions and links them up with a pool of answers. when clicking on the wrong answer, the timer goes down 5 seconds. and when the right answer is clicked the next question and choices are displayed (Another function). I need to store the answers and tag them with a score. and then when the quiz is complete or the timer reaches 0 i need a page to display that shows a score and allows input for name (local storage?) and takes that information and displays it on a board (list displayed 1-5) and a play again button.

var gameBox = document.querySelector('.gameBox')
var qs = document.getElementById('qs') // this is how our question ties to HTML
var timerElement = document.getElementById('timer')
var startPage = document.querySelector('.startPage')
var startGame = document.querySelector(".startGame")
var currentQuestion = 0;
var currentScore = 0;

var questionDisplay = document.getElementById('questionDisplay')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')


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


function quiz() {
  questionDisplay.textContent = questions[currentQuestion].questions;

  a.textContent = questions[currentQuestion].choices[0];
  b.textContent = questions[currentQuestion].choices[1];
  c.textContent = questions[currentQuestion].choices[2];
  d.textContent = questions[currentQuestion].choices[3];

}

function checkAnswer(event) {
  // Answer was correct
  if(event.target.textContent === questions[currentQuestion].answer) {
    currentScore += 15;
    nextQuestion()
    // if your answer was wrong
  } else {
    currentScore -= 5;
    nextQuestion()
  }
  
}
// make sure my answer boxes choices dont link up to the same box
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion = currentQuestion + 1
    quiz()

  } else {
    quizEnd()
  }
} 

function quizEnd() {
  qs.innerHTML = 
    `
    <p id="questionDisplay">Your Score was: ${currentScore} </p>
    <input id="initials"/> 
    <button id="saveScore"><a href="./highscores.html">Submit</a></button>
    `
    var saveScore = document.getElementById('saveScore')

    saveScore.addEventListener('click', saveLocal)
}

function saveLocal() {
  // taking what the user types
  var initials = document.getElementById("initials").value
  // setting the users input and score to a variable OBJECT
  var userobj = {name: initials, finalScore: currentScore}

  // attempting to grab the value of high score from local storage 
  var hs = localStorage.getItem('highScores')
  // checking does it exist
  if (hs == undefined) {
    // if it doesnt exist, set the value to be an empty array
    localStorage.setItem('highScores', JSON.stringify([]))
    hs = localStorage.getItem('highScores')
  } 
  // retrieving the original value
  var hsArray = JSON.parse(hs)
  // pushing the pushing the initials and current score (saved data) to the array
  hsArray.push(userobj)
  // saves changes back to local storage 
  localStorage.setItem('highScores', JSON.stringify(hsArray) )
}



var timeRemaining = 40;

function timerCountDown() {
  timerElement.textContent = timeRemaining
  countdown = setInterval(function(){
    // time to decrease starting at 40 seconds.
    if (timeRemaining > 0) {
      timeRemaining--
    } else {
      quizEnd()
      clearInterval(countdown)
    }
    // update timer on screen
    timerElement.textContent = timeRemaining
    // at zero, end the quiz 
  }, 1000) 
}

startGame.addEventListener('click', function(){
  quiz();
  timerCountDown();
  startGame.remove()
})

a.addEventListener('click', checkAnswer)
b.addEventListener('click', checkAnswer)
c.addEventListener('click', checkAnswer)
d.addEventListener('click', checkAnswer)








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