const conatiner = document.querySelector("container");

// Create divs
for (let i = 0; i < 16; i++) {
    // Create row divs
    let row = document.createAttribute("div");
    row.className = "row" + i;

    // Style
    row.style.display = "flex";

    conatiner.appendChild(row);

    // Create columns inside rows
    let cell = document.createAttribute("div");
    for (let j = 0; j < 16; j++) {
        cell.id = "x" + i + "y" + j;
        
        // Style
        newDiv.style.flex = 1;
        newDiv.style.margin = 0;
        newDiv.style.padding = 0;
        newDiv.textContent = "hi" + i + j;

        row.appendChild(newDiv);
    }
}


