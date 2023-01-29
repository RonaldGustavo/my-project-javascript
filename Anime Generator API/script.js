const btnGenerateEl = document.querySelector(".btn-generate")
const animeImgEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".anime-name")
const animeContainerEl = document.querySelector(".anime-container")

const urlAPI = "https://api.catboys.com/img"

btnGenerateEl.addEventListener("click", async () => {
    try {
        animeNameEl.innerText = "loading..."
        btnGenerateEl.disabled = true
        btnGenerateEl.innerText = "loading..."

        animeImgEl.src = "spinner.svg"
        const response = await fetch(urlAPI)
        const data = await response.json();

        btnGenerateEl.disabled = false
        btnGenerateEl.innerText = "Get Image"

        animeContainerEl.style.display = "block"
        animeImgEl.src = data.url
        animeNameEl.innerText = data.artist
    } catch (error) {
        animeImgEl.src = "spinner.svg"
        animeNameEl.innerText = "an error happened, try again later!"
        btnGenerateEl.disabled = true
    }


})