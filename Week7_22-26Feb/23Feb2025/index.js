let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
]

// const expeseReport = expenses.reduce(() => (), initialValue)
// const expenseReport = [{"Food": 80}, {"Utilities": 150}]
const expenseReport = expenses.reduce((report, currObj) => {
    // console.log(report)
    report[currObj.category] = (report[currObj.category] || 0) + currObj.amount
    // report[currObj.category] += currObj.amount
    // console.log(report)
    return report
}, { })



/**
 * expenseReport = { 
 * "food": 80,
 *  "Utilities": 150
 * }
 */
// console.log("Expense report", expenseReport)



let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
]
// give me all those task those are not sorted and sort krke

const updatedTask = tasks
    .filter((curTask) => !curTask.completed)
    .sort((a, b) => a.priority - b.priority)
// console.log(updatedTask)


let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
]
// output: [{title: "Movie A", ratings: 4}, { title: "Movie B", ratings: 3.66667}]

movieRatings.forEach((curMovie) => {
    const Rating = curMovie.ratings.reduce((sum, curValue) => sum + curValue, 0)
    const avgRating = (Rating / curMovie.ratings.length).toFixed(2)
    curMovie.ratings = avgRating
})
console.log(movieRatings)