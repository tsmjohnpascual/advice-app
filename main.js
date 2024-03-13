const button = document.querySelector("button");
const advice = document.querySelector("p")

button.addEventListener("click", fetchAdvice)

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    advice.innerHTML = `${data.slip.advice}`
}