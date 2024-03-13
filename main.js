const button = document.querySelector("button");
const adviceText = document.querySelector("p");
const adviceCounter = document.querySelector("h1");

button.addEventListener("click", fetchAdvice);

let counter = 1;

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceText.innerHTML = `"${data.slip.advice}"`;
    adviceCounter.innerHTML = `ADVICE #${counter + 1}`;
    counter++;
}