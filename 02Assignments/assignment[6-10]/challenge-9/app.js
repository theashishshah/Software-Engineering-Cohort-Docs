/**
 * Write your challenge solution here
 */

const panel = document.querySelector(".panel")
const toggleButton = document.querySelector(".toggle-btn")
const closeButton = document.querySelector(".close-btn")
const menuItems = document.querySelectorAll(".menu-item")
const mainContent = document.querySelector(".content")

function toggleButtonData() {
    toggleButton.textContent === `Open Menu` ? toggleButton.textContent = "Close Menu" : toggleButton.textContent = "Open Menu"

    if (toggleButton.textContent === `Close Menu`) {
        toggleButton.style.backgroundColor = "red"
    } else {
        toggleButton.style.backgroundColor = ""
    }
}

function toggleButtonFunction() {
    toggleButtonData()
    panel.classList.toggle("active")
}

function closeButtonFunction() {
    toggleButtonData()
    panel.classList.remove("active")
}


toggleButton.addEventListener("click", () => {
    toggleButtonFunction()
})

closeButton.addEventListener("click", () => {
    closeButtonFunction()

})

document.addEventListener('click',( event) => {
    if (
        panel.classList.contains('active') &&
        !panel.contains(event.target) &&
        event.target !== toggleButton
    ) {
        closeButtonFunction();
    }
});

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        alert(`${item.textContent} clicked.`)
    })
})