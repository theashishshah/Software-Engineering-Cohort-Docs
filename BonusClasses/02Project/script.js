const timeInputInSecond = document.getElementById("timeInput")

const startCountdownBtn = document.getElementById("startButton")

const countdownDisplay = document.getElementById("countdownDisplay")


function startCountdown( secs){
    return function (){
        console.log(secs)
        if(secs >= 0){
            countdownDisplay.textContent = secs
        }
        secs--;
    }
}

startCountdownBtn.addEventListener("click", () =>{
    const secs = timeInputInSecond.value
    const update = startCountdown(secs)
    const ref = setInterval(update, 1 * 1000)

})





// startCountdownBtn.addEventListener("click", () =>{
//     console.log(update)
    
// })