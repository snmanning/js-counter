
//variables
const app = document.querySelector('#app');
const addBtn = app.querySelector('.inc');
const minusBtn = app.querySelector('.sub');
const display = app.querySelector('.display');


//eventListeners
addBtn.addEventListener('click', addToCount);
minusBtn.addEventListener('click', subFromCount);

//functions
function addToCount() {
  const count = parseInt(display.textContent, 10);
  display.textContent = count + 1;
}
function subFromCount() {
  const count = parseInt(display.textContent, 10);
  display.textContent = count - 1;
}