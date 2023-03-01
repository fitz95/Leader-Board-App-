import url from './api.js';

const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

const addScore = async () => {
  const data = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  });
  form.reset();
  const apidata = await data.json();
  return apidata;
};
export default addScore;
