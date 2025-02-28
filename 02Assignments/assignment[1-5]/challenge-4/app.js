/**
 * Write your challenge solution here
 */ 

const taskInput = document.getElementById("taskInput")

const addButton = document.getElementById("addButton")

const taskList = document.getElementById("taskList")
if (taskList.innerHTML) {
    console.log("Ashish")
}

function addTask() {
    const li = document.createElement("li")
    li.innerText = taskInput.value
    taskList.appendChild(li)
    
    console.log(taskInput.value)
}

addButton.addEventListener("click", () => {
    addTask()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
       addTask()
   }
})
