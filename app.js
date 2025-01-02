// JS for etch-a-sketch game

let gridSize = 16;

// Function that creates grid using input number of squares
function createGrid(gridSizeInput) {
    for (let i = 0; i < gridSizeInput; i++) {
        const grid = document.querySelector("#grid");
        const newGridColumn = document.createElement("div");
        newGridColumn.classList.add("gridColumn");
        grid.appendChild(newGridColumn);
        for (let j = 0; j < gridSizeInput; j++) {
            const newGridSquare = document.createElement("div");
            newGridSquare.classList.add("gridSquare");
            newGridColumn.appendChild(newGridSquare);
        }
    }
}

createGrid(gridSize);

/* Adds hover effect when entering square, NOT WORKING, FIGURE THIS OUT 

const hover = document.querySelectorAll(".gridSquare");
hover.forEach((square) => {
    hover.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "grey";
    });
}); */
