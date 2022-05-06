

const backgroundColors = ["darkorange","pink", "cyan", "yellow", "white", "dodgerblue", "fuchsia", "greenyellow", "skyblue", "deeppink" ]
const gridElement = document.querySelector("#grid")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
let colorTimer

function createGrid (height = 7, width = 7) {
    for (let i = 0; i < height; i += 1) {
        let rowElement = document.createElement("div")
        rowElement.classList.add("row")
        for (let j = 0; j < width; j += 1) {
            let cellElement = document.createElement("div")
            cellElement.classList.add("cell")
            rowElement.append(cellElement)
        }
        gridElement.append(rowElement)
    }
}
createGrid()
const cells = document.querySelectorAll(".cell")

function changeColors () {
    for (let index = 0; index < cells.length; index += 1) {
        let randomColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]
        cells[index].style.backgroundColor = `${randomColor}`
    }
}

function animateFloor() {
    //make first color change, then start timer.
    changeColors()
    if (!colorTimer){
        colorTimer = setInterval(changeColors, 3000)
    }
}

stopButton.addEventListener("click", () => {
    clearInterval(colorTimer)
    colorTimer = null
    }
)

startButton.addEventListener("click", animateFloor)
