const todoData = document.getElementById("todo-input")
const addButton = document.getElementById("add-btn")
const deleteButton = document.getElementById("delete-btn")
const ulContainer = document.getElementById("todo-items")
const deleteAllItemsButton = document.getElementById("delete-all-btn")
const checkedInput = document.getElementById("check-btn")

// #TODO: 
// 1. add change theme button: for dark as well as white mode
// 2. use localStorage to store it locally


addButton.addEventListener('click', () => {
    const value = todoData.value;
    const modifiedValue = " " + value + " "
    todoData.value = ""

    if (value) {
        const li = document.createElement('li')

        const divContainer = document.createElement("div")
        divContainer.id = "todo-task"

        const checkboxButton = document.createElement("input")
        checkboxButton.type = "checkbox"

        const spanElement = document.createElement("span")
        spanElement.innerText = modifiedValue

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-btn")
        deleteButton.innerText = "Remove"


        divContainer.append(checkboxButton, spanElement)
        li.append(divContainer, deleteButton)
        ulContainer.appendChild(li)

        deleteButton.addEventListener('click', () => {
            li.remove()
        })

        checkboxButton.addEventListener('click', function () {
            if (checkboxButton.checked) {
                const delElement = document.createElement("del")
                delElement.style.opacity = 0.5
                delElement.innerText = modifiedValue
                
                divContainer.innerHTML = ""
                divContainer.append(checkboxButton, delElement)
                console.log("box checked")
            } else {
                divContainer.innerHTML = ""
                divContainer.append(checkboxButton, spanElement)
                console.log("box unchecked")
            }
        })
        // console.log(li)
    } else {
        console.log("Enter task")
    }

})

deleteAllItemsButton.addEventListener('click', () => {
    ulContainer.innerHTML = ""
})
