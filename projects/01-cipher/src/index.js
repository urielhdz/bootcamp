import cipher from './cipher.js';


const cipheredControl = document.querySelector('#translated-text');
const plainTextControl = document.querySelector('#initial-text');
const inputFactor = document.querySelector('#offset');
const interchangeButton = document.querySelector('#interchange');

function encodeUI(str) {
  console.log(parseInt(inputFactor.value, 10), str);
  cipheredControl.value = cipher.encode(parseInt(inputFactor.value, 10), str);
}

function decodeUI(str) {
  plainTextControl.value = cipher.decode(parseInt(inputFactor.value, 10), str);
}

plainTextControl.addEventListener('change', () => encodeUI(plainTextControl.value));
cipheredControl.addEventListener('change', () => decodeUI(cipheredControl.value));

interchangeButton.addEventListener('click', () => {
  document.querySelector("section").classList.toggle('reverse');
});
