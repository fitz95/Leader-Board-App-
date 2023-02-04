import './style.css';
import addscores from './modules/addscores.js';
import scoreDisplay from './modules/scoredisplay.js';

const name = document.getElementById('name');
const score = document.getElementById('score');
const submitbtn = document.getElementById('submitbtn');
const refreshbtn = document.getElementById('refreshbtn');

window.addEventListener('load', () => {
  scoreDisplay();
});

submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('boss');
  if (name.value !== '' || score.value !== '') {
    console.log('boss2');
    addscores();
  }
});

refreshbtn.addEventListener('click', async () => {
  scoreDisplay();
});
