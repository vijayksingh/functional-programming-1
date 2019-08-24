// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('rainbow');

const addColor = color => {
  const element = document.getElementById('rainbow');
  const div = document.createElement('div');
  div.style.paddingTop = '10px';
  div.style.backgroundColor = color;
  element.appendChild(div);
}

// What if the addColor was supposed to return a value, forEach will ignore it ?
// What can we do to solve this problem ?
const colors = ['red', 'aqua', 'green', 'yellow', 'blue'];

colors.forEach(addColor);
