import url from './api.js';

const scorediv = document.getElementById('scorediv');

const scoreFetch = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const output = data.result;
  return output;
};

const scoreDisplay = async () => {
  const scores = await scoreFetch();
  scorediv.innerHTML = '';
  scores.forEach((data) => {
    scorediv.innerHTML += `
    <div>${data.user}: ${data.score} </div>
    `;
  });
};

export default scoreDisplay;