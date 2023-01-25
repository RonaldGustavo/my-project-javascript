const inputEl = document.getElementById("input")
const infoTextEl = document.getElementById("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("meaning")
const audioEl = document.getElementById("audio")


async function fetchAPI(word) {

    try {

        //kondisi waiting response

        //untuk bisa memunculkan text kembali setelah di display none after searching
        infoTextEl.style.display = "block"

        //untuk menghilangkan meaning pada saat search kembali
        meaningContainerEl.style.display = "none"

        //loading waiting get data
        infoTextEl.innerText = `searching the meaning of "${word}`

        // use dynamic ``
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        //Await (async function) = agar codingan berjalan terlebih dahulu baru yang lain
        const result = await fetch(url).then((res) => res.json());


        //kondisi ketika word not define di api maka kondisi result.title
        // check api https://api.dictionaryapi.dev/api/v2/entries/en/sdsdsjdsd
        if (result.title) {
            meaningContainerEl.style.display = "block"
            infoTextEl.style.display = "none"
            titleEl.innerText = word
            meaningEl.innerText = "Not Available"
            audioEl.style.display = "none"
        } else {

            //when result come display none
            infoTextEl.style.display = "none"

            //Menampilkan meaning
            meaningContainerEl.style.display = "block"


            audioEl.style.display = "inline-flex"

            // menampilkan result wor d
            titleEl.innerText = result[0].word

            // get data api
            //path =  result[0] >> meanings[0] >> definitions[0] >> definition
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition

            // get api untuk audio
            audioEl.src = result[0].phonetics[0].audio
        }

    } catch (error) {
        console.log(error)
        infoTextEl.innerText = `error connection, try again`
    }
}

inputEl.addEventListener("keyup", (event) => {
    if (event.target.value && event.key === "Enter") {
        fetchAPI(event.target.value)
    }
})