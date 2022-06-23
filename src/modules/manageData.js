import displayScore from './displyScores.js'

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:t4bYQQWnDnxUBQep5kfZ/scores';

const getScores = async () => {
  const response = await fetch(url);
  const res = await response.json();
  const data = res.result;
  displayScore(data);
};

const createGame = async () => {
  const createGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const optionsData = {
    method:'POST',
    body: JSON.stringify({name:'JoffreyGame'}),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  const results = await fetch(createGameUrl, optionsData);
  const data = await results.json();
  const res = data.result;
  return res;
};

const addScore = () => {
  const name = document.querySelector('#username');
  const score = document.querySelector('#userscore');
  const namev = name.value;
  const scorev = score.value;
  addScores(namev, scorev);
  name.value = '';
  score.value = '';
};

const  addScores = (name, score) => {
  const data = {
    method:'POST',
    body: JSON.stringify({user:name, score:score}),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  fetch(url, data);
};

export { getScores, addScore };