import { showNewBoardModal } from "./assets/js/newBoard.js";

const addNewBoardBtn = document.querySelector(".btn-add-board")

/**Cards requirements
 * 1. 
 * 
 */

/** Board Input requirements
 *  1. Board name
 *  2. Small board description
 *  3. Color of board
 * 
 *  How to tackle this?
 *  1. should I use JS modules for code maintainibility
 *  2. should I use enum js to store color?
 *  3. 
 */



addNewBoardBtn.addEventListener("click", () => {
    loadCSS("./assets/css/newBoard.css"); // Load CSS dynamically
    showNewBoardModal(); // Open the new board modal
    // console.log("te")
});

function loadCSS(file) {
    if (!document.querySelector(`link[href="${file}"]`)) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = file;
        document.head.appendChild(link);
    }
}
