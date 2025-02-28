/**
 * Write your challenge solution here
 *
 */

const toggleButton = document.getElementById
    ("toggleButton")

const bulbStatus = document.getElementById('status')
let toggleValue = false;
const bodyElement = document.getElementById("body")
const upperBulb = document.getElementById('bulb')

toggleButton.addEventListener('click', () => {

    if (!toggleValue) {
        bulbStatus.innerText = `Status: On`
        toggleButton.innerHTML = `Turn Off`
        bodyElement.classList.add("dark-mode")
        upperBulb.classList.remove("off")
        toggleValue = !toggleValue
    } else {
        bulbStatus.innerText = `Status: Off`
        toggleButton.innerHTML = `Turn On`
        upperBulb.classList.add("off")
        bodyElement.classList.remove("dark-mode")
        toggleValue = !toggleValue
    }
})
