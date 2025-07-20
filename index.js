// index.js

const dice = document.getElementById('dice');
const rollButton = document.getElementById('roll-button');
const rollHistory = document.getElementById('roll-history');
const deleteButton = document.getElementById('delete-button');

let rollCount = 2; // Starts at 2 because you have two rolls already in HTML

const diceFaces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685']; // ⚀ to ⚅

rollButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * 6);
  const face = diceFaces[randomIndex];

  // Update the main dice
  dice.innerHTML = face;

  // Update history

  rollCount++;
  const li = document.createElement('li');
  li.innerHTML = `Roll ${rollCount}: <span>${face}</span>`;
  rollHistory.appendChild(li);
});
