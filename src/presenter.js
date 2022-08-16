import {sumar,multiplicar} from './sumador';

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const div = document.querySelector("#resultado-div");

document.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  if(event.target.className == "sumar"){
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  }
  if(event.target.className == "multiplicar"){
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  }
});

