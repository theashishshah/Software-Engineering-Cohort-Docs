/**
 * Write your challenge solution here
 */

const mainHeading = document.getElementById("mainHeading")
// mainHeading.style.color = "red"

function changeColor(color) {
    mainHeading.style.color = color
}

const myButtons = document.querySelectorAll('button')

myButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerText.toLowerCase() === "reset")
            changeColor('black')
        else 
        changeColor(btn.innerText)
    })
})

// const redButton = document.getElementById("redButton")

// redButton.addEventListener('click', () => {
//     changeColor(redButton.innerText)
// })

// const greenButton = document.getElementById("greenButton")

// greenButton.addEventListener('click', () => {
//     changeColor(greenButton.innerText)
// })

// const blueButton = document.getElementById("blueButton")

// blueButton.addEventListener('click', () => {
//     changeColor(blueButton.innerText)
// })

// const purpleButton = document.getElementById("purpleButton")

// purpleButton.addEventListener('click', () => {
//     changeColor(purpleButton.innerText)
// })

// const resetButton = document.getElementById("resetButton")

// resetButton.addEventListener('click', () => {
//     changeColor(resetButton.innerText)
// })