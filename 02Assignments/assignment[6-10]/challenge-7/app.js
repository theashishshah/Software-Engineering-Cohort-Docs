const accordionButton = document.querySelectorAll(".accordion-button")
const accordionContent = document.querySelectorAll(".accordion-content")
console.log(accordionContent)

for (let i = 0; i < accordionButton.length; i++){
    accordionButton[i].addEventListener("click", ()=>{
        const arrow = accordionButton[i].querySelector(".arrow")
        arrow.classList.toggle("active")
        if (arrow.classList.contains("active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
            console.log("Show content")
        } else {
            accordionContent.style.maxHeight = 0
            console.log("Delete content")
        }
    })
}