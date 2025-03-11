const date = document.getElementById('date');
const time = document.getElementById('time');

function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        dayPeriod: 'long',
        hourCycle: 'h11',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    time.textContent = now.toLocaleTimeString();
    date.textContent = now.toDateString("en-IN", options);
}
setInterval(updateDateTime, 1 * 1000);
updateDateTime();

/**
 * How can I change or get the local date if someone is using my website outsite on India, basically their timezone
 * how should I apply purchase power parity for other countries
 */

// console.log(ms)
// console.log(s)
// console.log(mins)
// console.log(hours)
// console.log(hours / 24)
// console.log(Math.floor((hours / 24)/ 365)+' years')
// console.log(Math.floor((hours / 24)/ 365)+' years')
// console.log("helo")
// console.log(now.getTime())
/** //INFO:
 * so basically we can get the number of ms using get time method(by default we get apoch time ms else provided one)
 */

// const launchDate = new Date("July 1, 1999, 12:00:00");
// const launchDate = new Date();
// const ms = launchDate.getTime()
// const secs = ms / 1000
// const mins = secs / 60
// const hours = mins / 60
// const days = hours / 24
// const years = days / 365
// console.log(years)
// console.log(Date(undefined))
// console.log(Date.now())
// console.log(Date.parse())
// console.log(Date.UTC())

// const one = Date()  // new Date().toString()
// const two = new Date()
// console.log(typeof one )
// console.log(typeof two)
// console.log( Date())
// console.log(Date.now())
// console.log(new Date().toString())

// console.log(new Date(2000, -1))

// const now = new Date()
// console.log(now.toISOString())

// const event = new Date("August 19, 1975 23:15:30");
// const event = new Date("12 March 2025, 23:20:34:89");
// const events = new Date("11 mar 2025 23:32:21");
// const events = new Date(2025, 2, 11, 12, 31, 41, 12);

// const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     dayPeriod: "long",
//     hourCycle: "h11",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit"
// }

// const events = new Date("12 March 2025 23:23:34");
// console.log(typeof events)
// console.log(events.toDateString(options))
// console.log(events.toTimeString())
// console.log(events.toLocaleTimeString())
// console.log(events.toLocaleDateString("en-IN", options))
// console.log(events.toLocaleTimeString("en-US",));
// console.log(events.toLocaleTimeString("en-IN").toUpperCase());
