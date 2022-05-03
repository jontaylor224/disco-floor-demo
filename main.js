

const backgroundColors = ["darkorange","pink", "cyan", "yellow", "white", "dodgerblue", "fuchsia", "greenyellow", "skyblue", "deeppink" ]
const cells = document.querySelectorAll(".cell")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
let colorTimer

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
