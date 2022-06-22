import  './index.css';
import {displayScore} from './modules/displyScores.js';
import {scores, addScore} from './modules/manageData.js';

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
  addScore();
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  displayScore(scores);
});

displayScore(scores);
