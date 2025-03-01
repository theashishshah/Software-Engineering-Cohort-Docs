/** Tasks
 * 1. count moves(2 button press count 1)
 * 2. set timer when user pressess any button
 * 3. Reset all the things when user press restart button
 * 4. Make layout: <div .card> <div .card-front> <div .card-back>some</div></div></div>
 * 5. Emoji goal: all emojies should be picked,no emoji picked more than two times,emoji should not pick in sequencial manner
 */

/**
 * Algorithm for random index number generator: [0, 15]
 * 1. generate ran number from a fn
 * 2. call this fn untill you get 0-15 value once, and only once, 
 * but this is not optimised way
 * or we can do, just generate any two number between 0-15 and suffle them
 */

const allDifferentEmoji = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']
const emojies = [...allDifferentEmoji, ...allDifferentEmoji]


const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const swap = (arr, i, j) => {
  let temp = i
  arr[i] = arr[j]
  arr[j] = arr[temp]
  
  // return arr;
}

function shuffleCards(arr) {
  let j = 0;
  for (let i = 0; i < 16; i--) {
    j = Math.floor(Math.random()*(i + 1))
    // [arr[i], arr[j]] = [arr[j], arr[i]];
    swap(arr, i, j)
    
  }
  return arr
}

// when page loads create layout:
const createLayout = () => {
  const layoutContainer = document.getElementById("gameContainer")
  layoutContainer.innerHTML = ""
  emojies.forEach((emoji) => {
    const card = document.createElement("div")
    const cardFront = document.createElement("div")
    const cardBack = document.createElement("div")

    card.classList.add("card")
    cardFront.classList.add("card-front")
    cardBack.classList.add("card-back")

    cardBack.innerText = `${emoji}`

    card.appendChild(cardFront)
    card.appendChild(cardBack)
    layoutContainer.appendChild(card)
  })
  console.log(layoutContainer)


}

const restartGame = () => {
  shuffleCards(emojies)
  console.log(shuffleCards([...emojies]))
}
window.addEventListener("DOMContentLoaded", () => {

  createLayout()
})