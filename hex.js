// Import
import getRandomNum from './utils/randomNum.js';

// DOM elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexLength = hex.length;
const body = document.body;

// Handler
const changeHexBackground = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum(hexLength)];
    }

    color.innerText = hexColor;
    body.style.backgroundColor = hexColor;
};

// Listener
btn.addEventListener('click', changeHexBackground);
