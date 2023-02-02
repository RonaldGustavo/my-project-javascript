const cardEl = document.querySelector(".card")
const cardTextEl = document.querySelector(".card-text")
const btnUpdate = document.querySelector(".btn-update")

btnUpdate.addEventListener("click", () => {
    const selectEl = document.querySelector(".select-style").value
    const inputValueEl = document.querySelector(".input-value").value

    if (selectEl == "Background") {
        empetyValue()
        cardEl.style.background = inputValueEl
    } else if (selectEl == "Font Size") {
        empetyValue()
        validationFontSize()
    } else if (selectEl == "Text Color") {
        empetyValue()
        cardTextEl.style.color = inputValueEl
    } else if (selectEl == "Padding") {
        empetyValue()
        validationPadding()
    } else {
        alert("Choose Style First!")
    }


    function validationFontSize() {
        var validasiAngka = /^[0-9]+$/;
        // validate angka
        if (inputValueEl.match(validasiAngka) && inputValueEl <= 100) {
            cardTextEl.style.fontSize = inputValueEl + "px"
        } else {
            alert("input only Number! & max 100px")
        }

    }
    function validationPadding() {
        var validasiAngka = /^[0-9]+$/;
        // validate angka
        if (inputValueEl.match(validasiAngka) && inputValueEl <= 100) {
            cardEl.style.padding = inputValueEl + "px"
        } else {
            alert("input only Number! & max 100px")
        }

    }

    function empetyValue() {

        if (inputValueEl == 0) {
            alert("value tidak boleh kosong")
        }
    }

})

function handleReset() {
    location.reload()
}


