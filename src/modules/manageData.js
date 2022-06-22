const scores = [];

if (localStorage.getItem('scores')) {
  JSON.parse(localStorage.getItem('scores')).forEach(element => {
    scores.push(element);
  });
}

const addScore = () => {
  const name = document.querySelector('#username');
  const score = document.querySelector('#userscore');
  const namev = name.value;
  const scorev = score.value;
  scores.push({ name: namev, score: Number(scorev) });
  localStorage.setItem('scores', JSON.stringify(scores));
  name.value = '';
  score.value = '';
};

export { scores, addScore };