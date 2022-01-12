const grid = document.getElementById("grid");
const setBtn = document.getElementById("btn");
const gridSize = document.getElementById("grid-selector");
const colorChoice = document.getElementById("color-selector");
const pixels = document.getElementsByClassName("square");
let pencil = colorChoice.value;

function makeGrid(size){
    document.querySelectorAll(".square").forEach(e => e.remove());
    grid.style.setProperty("--grid-size", size);

    for (let i = 0; i < size * size; i++){
        square = document.createElement("div");
        square.className = "square";
        grid.appendChild(square);
    }
}

setBtn.addEventListener("click", e => {
    makeGrid(gridSize.value);
}
)

colorChoice.addEventListener("input", e => {
    pencil = colorChoice.value;
}
)

for (let j = 0; j <= pixels.length; j++){
    ;
}