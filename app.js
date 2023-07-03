// Import
import getRandomNum from './utils/randomNum.js';

// DOM elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Variables
const colors = [
    'green',
    'red',
    'rgba(133,122,200)',
    '#f15025',
    'black',
    'blue',
    'grey',
    'yellow',
];
const colorsLength = colors.length;
const body = document.body;

// Handler
const changeBackgroundColor = () => {
    const randomNumber = getRandomNum(colorsLength);
    body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
};

// Listener
btn.addEventListener('click', changeBackgroundColor);
