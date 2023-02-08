const menu1El = document.querySelector(".menu1")
const menu2El = document.querySelector(".menu2")
const menu3El = document.querySelector(".menu3")
const menu4El = document.querySelector(".menu4")
const menu5El = document.querySelector(".menu5")

const logoEl = document.querySelector(".logo")

const timeEl = document.querySelector(".time")

menu1El.addEventListener("click", () => {
    window.location.href = "/menu1.html"
})
menu2El.addEventListener("click", () => {
    window.location.href = "/menu2.html"
})
menu3El.addEventListener("click", () => {
    window.location.href = "/menu3.html"
})
menu4El.addEventListener("click", () => {
    window.location.href = "/menu4.html"
})
menu5El.addEventListener("click", () => {
    window.location.href = "/menu5.html"
})
logoEl.addEventListener("click", () => {
    location.reload()
})
menu5El.addEventListener("click", () => {
    window.location.href = "/menu5.html"
})

todayTime = new Date()

timeEl.innerHTML = todayTime.toLocaleDateString() + " " + todayTime.toLocaleTimeString()

console.log(todayTime.toLocaleDateString());