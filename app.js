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

// Adds hover effect when entering square 
const hover = document.querySelector("#grid");
hover.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("gridSquare")) {
        event.target.style.backgroundColor = "lightgrey";
    }
});

// Removes hover effect and adds pixelated trail when leaving square
const trail = document.querySelector("#grid");
trail.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("gridSquare")) {
        event.target.style.backgroundColor = "black";
    }
});

// Function that removes the grid. Used later as part of resetting sketchpad
function removeGrid() {
    const grid = document.querySelector("#grid");
    const allGridColumns = document.querySelectorAll(".gridColumn");
    allGridColumns.forEach((gridColumn) => grid.removeChild(gridColumn));
}

// Takes user input from reset sketchpad button. Makes sure it's valid. Removes existing grid. Adds new grid with correct size. 
// NEED TO MAKE SURE NEW GRID IS SAME TOTAL SIZE AS INITIAL GRID 
const resetSketchpad = document.querySelector("#button");
resetSketchpad.addEventListener("click", () => {
    let newGridInput = prompt("Please enter the number of squares per side of the new sketchpad:");
    const errorMessage = document.querySelector("#error");
    const priorError = document.querySelector(".errorMessage");
    if (Number(newGridInput) <= 0) {
        if (priorError) {
            errorMessage.removeChild(priorError);
        }
        const zeroOrLess = document.createElement("div");
        zeroOrLess.classList.add("errorMessage");
        zeroOrLess.textContent = "Whoops! Your sketchpad can't have 0 or negative squares. Please enter a different sketchpad size.";
        zeroOrLess.style.cssText = "color: red; padding: 0px 50px; margin-bottom: 25px;";
        errorMessage.appendChild(zeroOrLess);
    } else if (Number(newGridInput) >= 100) {
        if (priorError) {
            errorMessage.removeChild(priorError);
        }
        const gridTooBig = document.createElement("div");
        gridTooBig.classList.add("errorMessage");
        gridTooBig.textContent = "Whoops! Your sketchpad can't have 100 or more squares per side. Please enter a different sketchpad size.";
        gridTooBig.style.cssText = "color: red; padding: 0px 50px; margin-bottom: 25px;";
        errorMessage.appendChild(gridTooBig);
    } else if (typeof newGridInput != "number" && isNaN(newGridInput)) {
        if (priorError) {
            errorMessage.removeChild(priorError);
        }
        const notANumber = document.createElement("div");
        notANumber.classList.add("errorMessage");
        notANumber.textContent = "Whoops! You didn't enter a number. Please enter a valid sketchpad size.";
        notANumber.style.cssText = "color: red; padding: 0px 50px; margin-bottom: 25px;";
        errorMessage.appendChild(notANumber);
    } else if (!Number.isInteger(Number(newGridInput))) {
        if (priorError) {
            errorMessage.removeChild(priorError);
        }
        const notAnInt = document.createElement("div");
        notAnInt.classList.add("errorMessage");
        notAnInt.textContent = "Whoops! Your sketchpad size had a decimal. Please enter a whole number when resetting it.";
        notAnInt.style.cssText = "color: red; padding: 0px 50px; margin-bottom: 25px;";
        errorMessage.appendChild(notAnInt);
    } else {
        if (priorError) {
            errorMessage.removeChild(priorError);
        }
        removeGrid();
        createGrid(newGridInput);
    }
});