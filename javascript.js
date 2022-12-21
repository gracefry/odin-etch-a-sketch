const grid = document.querySelector("#grid");

// Create row divs
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.id = `${i + 1}`

    // Style
    row.style.display = "flex";
    // row.style.border = "1px solid yellow";
    
    grid.appendChild(row);

    // Create cells to rows
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div")
        cell.id = `x${i + 1}-y${j + 1}`;
        cell.classList.add("cell");

        // Style
        cell.style.flex = "1";
        // cell.style.border = "1px solid red";  

        row.appendChild(cell)
    }
}