const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.forEach((score) => {
  const currentScore = document.createElement("li");
  currentScore.innerHTML = `${score.name?.toUpperCase()} - ${score.score}`;
  currentScore.classList.add("high-score");
  highScoresList.appendChild(currentScore);
});
