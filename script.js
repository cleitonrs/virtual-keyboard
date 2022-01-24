const ledModeClass = 'led__mode'
const button = document.getElementById('led__selector')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')

function changeClass() {
  button.classList.toggle(ledModeClass)
  one.classList.toggle(ledModeClass)
  two.classList.toggle(ledModeClass)
  three.classList.toggle(ledModeClass)
  four.classList.toggle(ledModeClass)
  five.classList.toggle(ledModeClass)
}

button.addEventListener('click', changeClass)