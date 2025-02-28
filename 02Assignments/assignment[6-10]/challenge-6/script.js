const digitalClock = document.querySelector(".digital-clock")
const dayDateMonthYear = document.querySelector(".date")
const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")
const circleClock = document.querySelector(".clock")

// set clock number value
for (let i = 1; i <= 12; i++) {
    const numberDiv = document.createElement("div")
    numberDiv.classList.add("number")
    let degree = `${i * 30}deg`
    numberDiv.style.setProperty(`--rotation`, degree)
    numberDiv.innerHTML = `<span>${i}</span>`
    // numberDiv.textContent = `${i}`
    // console.log(numberDiv)
    circleClock.appendChild(numberDiv)
}


function setTime() {
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = ((minutes + (seconds / 60)) / 60) * 360;
    const hourDegree = (((hours % 12) + (minutes / 60) + (seconds / 60)) / 12) * 360;


    secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;

    function padZero(num) {
        return num.toString().padStart(2, "0")
    }

    const dateYear = date.toLocaleString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
    dayDateMonthYear.textContent = dateYear
    digitalClock.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
}
setTime()
setInterval(setTime, 1 * 1000)












// const currHour = hours.toString().length === 1 ? 0 + hours.toString() : hours;
// const currMinutes = minutes.toString().length === 1 ?
//     0 + minutes.toString() : minutes;
// const currSeconds = seconds.toString().length === 1 ? 0 + seconds.toString() : seconds;


/*
const date = new Date()

console.log(date);
console.log(date.toTimeString())
console.log(date.toString())  // Tue Feb 25 2025 23:50:12 GMT+0530 (India Standard Time)

// above three koi kam ka nhi hai

console.log("\n")

console.log(date.toISOString())
console.log(date.toJSON())

console.log("\n")

console.log(date.toDateString()) // Tue Feb 25 2025
console.log(date.toLocaleDateString()) // mm-dd-yyyy
console.log(date.toLocaleString()) // mm-dd-yyyyy hh-mm-ss PM/AM
console.log(date.toLocaleTimeString()) // hh-mm-ss PM/AM

console.log("\n")
console.log(date.getDate()) // current date of the month
console.log(date.getDay())  // day of the week and week starts from sunday(0)
console.log(date.getFullYear()) // current year
console.log(date.getMonth()) // returns month 0(jan) 1 Feb, 2 March
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getMilliseconds())
console.log(date.getSeconds())
// console.log(date.getTimezoneOffset())
console.log(date.toLocaleString('en-IN',
    {
        weekday: "short",
        // calendar: "indian",
        day: "numeric",
        month: "long",
        year: "numeric"

    }
))
*/

// const customDate = new Date(2025, 2, 26, 4, 23, 12)
// console.log(customDate.toLocaleString("en-IN", {
//     weekday: "short",
//         day: "numeric",
//         month: "long",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//         second: "2-digit"
// }))