let scores = [];

if(localStorage.getItem('scores')){
  scores = JSON.parse(localStorage.getItem('scores'));
}

const  addScore = () => {
  const name = document.querySelector("#username");
  let score = document.querySelector("#userscore");
  const namev = name.value;
  const scorev = score.value;
  scores.push({name: namev, score: Number(scorev)});
  localStorage.setItem('scores', JSON.stringify(scores));
  name.value = '';
  score.value = '';
}

export {scores, addScore};