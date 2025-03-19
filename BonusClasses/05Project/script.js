const toggleBtn = document.getElementById('changeMode');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const buttonsContainer = document.querySelector(".buttons")
const inputs = document.querySelector(".inputs")
const result = document.querySelector(".result")
const operator = document.querySelector(".operator")
const buttons = document.querySelectorAll("button")

function changeMode() {
    if (container.classList.contains('dark')) {
        container.classList.add('light');
        container.classList.remove('dark');
        body.style.backgroundColor = "#e0e0e0"
        buttonsContainer.style.backgroundColor = "#F5F5F5"
        inputs.style.color = "#637381"
        result.style.color = "#1E1E1E"
    } else {
        container.classList.add('dark');
        container.classList.remove('light');
        body.style.backgroundColor = "#212327"
        buttonsContainer.style.backgroundColor = "#27292E"
        inputs.style.color = "#CCCDD7"
        result.style.color = "#ffffff"
       
    }
}
toggleBtn.addEventListener('click', changeMode);

buttons.forEach((btn) =>{
    console.log(btn)
})

// buttons.addEventListener("click", () =>{
//     inputs.textContent = btn.value
// })