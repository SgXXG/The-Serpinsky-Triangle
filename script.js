let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');

let cornerCords = [
    [canvas.getBoundingClientRect().width / 2, 0],
    [0, canvas.getBoundingClientRect().height],
    [canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height]
]

let iteration = 0
function RecourseDrawing(previousDotCords) {
    setTimeout(function () {
        let randomCorner = Math.floor(Math.random() * cornerCords.length)

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.fillRect((cornerCords[randomCorner][0] + previousDotCords[0]) / 2, (cornerCords[randomCorner][1] + previousDotCords[1]) / 2, 1, 1)
        ctx.closePath()

        iteration++
        document.querySelector('span').innerText = `Точек на экране: ${iteration}`

        RecourseDrawing([(cornerCords[randomCorner][0] + previousDotCords[0]) / 2, (cornerCords[randomCorner][1] + previousDotCords[1]) / 2])
    }, 0)
}

RecourseDrawing(cornerCords[0])