'use strict';

let wrapper = document.querySelector('.wrapper'),
  colorText = document.querySelector('.color'),
  change = document.querySelector('.change');

function getRandomHex() {
  return (Math.floor(Math.random() * Math.floor(999999)) + 1000000).toString(16);
}

change.addEventListener('click', () => {
  let color = '#' + getRandomHex();
  wrapper.style.backgroundColor = color;
  colorText.textContent = color;
  change.style.color = color;
});