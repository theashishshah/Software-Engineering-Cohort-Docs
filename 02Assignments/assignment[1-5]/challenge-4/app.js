const totalTasks = document.getElementById("totalTasks")
const completedTasks = document.getElementById("completedTasks")
const taskList = document.getElementById("taskList")
const addButton = document.getElementById("addButton")
const taskInput = document.getElementById("taskInput")

const tasks = []
const completedTasksTrack = []


function addTask(taskData) {
    taskInput.value = ""
    const li = document.createElement("li")
    const input = document.createElement("input")
    const span = document.createElement("span")
    const button = document.createElement("button")

    input.type = "checkbox"
    input.classList.add("complete-checkbox")

    span.classList.add("task-text")
    span.textContent = taskData

    li.classList.add("task-item")

    button.classList.add("delete-button")
    button.textContent = "Delete"

    input.addEventListener('click', function () {
        console.log(input)
        li.classList.toggle("completed")
    })

    button.addEventListener("click", () => {
        const index = tasks.indexOf(li)
        tasks.splice(index, 1)
        totalTasks.textContent = `Total tasks: ${tasks.length}`
        li.remove()
        
    })

    li.append(input, span, button)
    tasks.push(li)
    totalTasks.textContent = `Total tasks: ${tasks.length}`
    taskList.append(li)

}

addButton.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim())
    } else {
        taskInput.value = ""
        alert("Provide valid input!")
    }

})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim())
    } else if (event.key === "Enter") {
        taskInput.value = ""
        alert("Provide valid input!")
    }
})
