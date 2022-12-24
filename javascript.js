let size = 16; // Set grid size
makeGrid(); // Make initial grid

// Add button functionality
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    let n = prompt("Provide grid size: \n", 16);

    if (isNaN(n)) {
        alert("Size must be a number")
    } else if (n % 1 != 0) {
        alert("Size must be an integer")
    } else if (n >= 100) {
        alert("Size must be under 100")
    } else if (n <= 0) {
        alert("Size must be above 0")
    } else {
        size = n;
        clearDiv();
        makeGrid();
        addHover();
    }

});

function makeGrid() {
    const grid = document.querySelector("#grid");

    // Create row divs
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.id = `${i + 1}`
    
        // Style
        row.style.display = "flex";
        
        grid.appendChild(row);
    
        // Create cells to rows
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div")
            cell.id = `x${i + 1}-y${j + 1}`;
            cell.classList.add("cell");
    
            // Style
            cell.style.flex = "1";
            cell.style.aspectRatio = "1 / 1"
            cell.style.border = "1px solid #eee";  
    
            row.appendChild(cell)
        }
    }

    addHover();
}

// Change color on hover
function addHover() {
    const cells = document.querySelectorAll(".cell") 

    cells.forEach(cell => cell.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
    }));
}

function clearDiv() {
    const grid = document.querySelector("#grid");

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    } 
}
