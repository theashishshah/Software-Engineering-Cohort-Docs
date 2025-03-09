export function showNewBoardModal() {
    let modal = document.getElementById("new-board-modal");

    if (!modal) {
        fetch("components/newBoard.html") // Corrected path
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                document.body.insertAdjacentHTML("beforeend", html);
                
                // Wait for the DOM to process the new HTML
                setTimeout(() => {
                    modal = document.getElementById("new-board-modal"); // Get it again after insertion
                    if (modal) {
                        addModalEventListeners();
                    } else {
                        console.error("Modal still not found!");
                    }
                }, 10); // Delay slightly to let the DOM update
            })
            .catch(err => console.error("Error loading newBoard.html:", err));
    } else {
        modal.classList.remove("hidden");
    }
}


function addModalEventListeners() {
    let modal = document.getElementById('new-board-modal');
    let cancelBtn = document.getElementById('cancel-btn');
    let createBtn = document.getElementById('create-board-btn');

    if (!modal || !cancelBtn || !createBtn) {
        console.error('Modal elements not found!');
        return; // Prevent further errors
    }

    cancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    createBtn.addEventListener('click', () => {
        let boardName = document.getElementById('board-name').value.trim();
        if (boardName) {
            console.log('New Board Created:', boardName);
            modal.classList.add('hidden');
        } else {
            alert('Please enter a board name!');
        }
    });
}
