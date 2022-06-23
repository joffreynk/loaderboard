import './index.css';
import { getScores, addScore } from './modules/manageData.js';

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
  addScore();
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  getScores();
});

getScores();
