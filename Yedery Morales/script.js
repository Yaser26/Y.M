const btnRandom = document .querySelector("#random-btn")

function moverAleatoriamente(btn) {
    btn.style.fontWeingt = "bolder"
    btn.style.position = "absolute"
    btn.style.top =math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left =math.floor(Math.random() * 90 + 5) + "%"
}

btnRandom.addEventListener("mouseenter" , function (e) {
    moverAleatoriamente(e.target)
})