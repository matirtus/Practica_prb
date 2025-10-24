// Variables del juego
let secretNumber;
let attempts;
const input = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');


// Genera número aleatorio entre 1 y 100
function newGame() {
secretNumber = Math.floor(Math.random() * 100) + 1; // 1..100
attempts = 0;
feedback.textContent = '';
attemptsDisplay.textContent = 'Intentos: 0';
input.value = '';
input.disabled = false;
submitBtn.disabled = false;
input.focus();
}


// Procesa un intento
function checkGuess() {
const value = Number(input.value);


if (!Number.isInteger(value) || value < 1 || value > 100) {
feedback.textContent = 'Por favor introduce un número entero entre 1 y 100.';
return;
}


attempts += 1;
attemptsDisplay.textContent = 'Intentos: ' + attempts;


if (value === secretNumber) {
feedback.textContent = `¡Correcto! Lo adivinaste en ${attempts} intento${attempts === 1 ? '' : 's'}.`;
input.disabled = true;
submitBtn.disabled = true;
} else if (value < secretNumber) {
feedback.textContent = 'Demasiado bajo.';
} else {
feedback.textContent = 'Demasiado alto.';
}


input.select();
}


// Eventos
submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', newGame);
input.addEventListener('keydown', function(e) {
if (e.key === 'Enter') checkGuess();
});
window.addEventListener('DOMContentLoaded', newGame);