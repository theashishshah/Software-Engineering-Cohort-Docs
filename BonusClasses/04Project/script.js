const generateBtn = document.querySelector(".generateButton")
const quote = document.getElementById("quoteDisplay")
const author = document.getElementById("author")
// console.log(author)

function generateRandomQuote() {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    .then(res => res.json())
    .then(apiData => {
       
        quote.textContent = apiData.data.content
        author.textContent = apiData.data.author
    })
}

document.addEventListener("DOMContentLoaded", function() {
    generateRandomQuote()
  });
generateBtn.addEventListener("click", generateRandomQuote)