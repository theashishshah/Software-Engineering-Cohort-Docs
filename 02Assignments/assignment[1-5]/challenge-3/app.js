/**
 * Write your challenge solution here
 */
const nameInput = document.getElementById("nameInput")
const jobInput = document.getElementById("jobInput")
const ageInput = document.getElementById("ageInput")
const bioInput = document.getElementById("bioInput")

let nameDisplay = document.getElementById("nameDisplay")
let jobDisplay = document.getElementById("jobDisplay")
let ageDisplay = document.getElementById("ageDisplay")
let bioDisplay = document.getElementById("bioDisplay")

nameInput.addEventListener("input", () => {
    nameDisplay.innerText = nameInput.value
})

jobInput.addEventListener("input", () => {
    jobDisplay.innerText = jobInput.value
})

ageInput.addEventListener("input", () => {
    if (ageInput.value > 120) {
       alert("You're not going to live more than 120 year so put within 120 😡")
    } else {
        ageDisplay.innerText = ageInput.value
   }
})
bioInput.addEventListener("input", () => {
    bioDisplay.innerText = bioInput.value
})