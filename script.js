function createGrid(n) {
    let gridDiv = document.querySelector(".grid-container");
    gridDiv.innerHTML = "";


    for (let i = 1; i <= n*n; i++) {
        let square = document.createElement("div");
        square.className = "square";
        // square.textContent = `Square ${i}`;
        gridDiv.appendChild(square);
    }

    gridDiv.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}

createGrid(16);

//hover to change color of grid div
let gridDiv = document.querySelector(".grid-container")
gridDiv.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("square")) {
        target.style.backgroundColor = "dodgerblue";


        //opacity
        if (!target.style.opacity) {
            target.style.opacity = 0;
        }

        let curOpacity = parseFloat(target.style.opacity);
        curOpacity += + 0.1;
        target.style.opacity = curOpacity;
    }
})

//button accepting input
let inputBtn = document.querySelector("#input");
inputBtn.addEventListener("click", (event) => {
    let n = prompt("Enter number of squares per side: ");
    createGrid(n);
})