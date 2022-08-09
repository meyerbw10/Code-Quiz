var displayScore = JSON.parse(localStorage.getItem("highScores"))
var highScoresDiv = document.getElementById('highScoresDiv')


function displayHighScores() {
  displayScore.forEach(score => {
    var p = document.createElement("p")
    p.textContent = "Initials: " + score.name + "," + " Final Score: " + score.finalScore
    highScoresDiv.append(p)
  });
}
console.log(displayScore);
displayHighScores()