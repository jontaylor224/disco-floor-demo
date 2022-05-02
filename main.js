

const backgroundColors = ["pink", "cyan", "yellow", "white", "white", "fuchsia", "greenyellow", "skyblue" ]


const cells = document.querySelectorAll(".cell")

console.log(cells)

function changeColors () {
    for (let index = 0; index < cells.length; index += 1) {
        let randomColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]
        cells[index].style.backgroundColor = `${randomColor}`
    }
}

// changeColors()

let colorTimer = setInterval(changeColors, 3000)

let stopButton = document.querySelector("#stop")

stopButton.addEventListener("click", () => clearInterval(colorTimer))