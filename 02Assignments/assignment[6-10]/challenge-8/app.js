/**
 * Write your challenge solution here
 */

let sum = 0
const emptyCard = document.querySelector(".empty-cart")
let tshirtQuantityy = 0;

function createItems(productName) {
    const cartItem = document.createElement("div")
    cartItem.classList.add("cart-item")
    
    const itemName = document.createElement("div")
    itemName.textContent = productName

    const itemDetails = document.createElement("div")
    
    const minusButton = document.createElement("button")
    minusButton.textContent = "-"
    const plusButton = document.createElement("button")
    plusButton.textContent = "+"

    const quantity = document.createElement("span")
    quantity.style.padding = "0px 8px"
    const totalAmount = document.createElement("span")
    totalAmount.style.padding = "0px 8px"
    quantity.textContent = `${++tshirtQuantityy}`
    totalAmount.textContent = "$343.5"

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    
    itemDetails.append(minusButton, quantity, plusButton, totalAmount, removeButton)
    cartItem.append(itemName, itemDetails)
    console.log(typeof cartItem)
    console.log(emptyCard.contains(cartItem))
    emptyCard.append(cartItem)
    return cartItem
}

function addToCart(productName, price) {
   
    
}