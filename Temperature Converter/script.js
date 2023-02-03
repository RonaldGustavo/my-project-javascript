const celsiusEl = document.getElementById("celsius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")
const inputEl = document.querySelectorAll(".input")


function computeTemp(event) {

    // get value when input
    // console.log(event.target.value);

    // + untuk membuat nilai menjadi number not string
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            // tofixed = untuk membuat nilai decimal tidak melebihi 2 digit
            //formula fahrenheit
            fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2)
            // formula kelvin
            kelvinEl.value = (currentValue + 273.32).toFixed(2)
            break;
        case "fahrenheit":
            //formula Celsius
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2)
            // formula kelvin
            kelvinEl.value = ((currentValue - 32) / 1.8 + 272.32).toFixed(2)

            break;
        case "kelvin":
            //formula Celsius
            celsiusEl.value = (currentValue - 272.32).toFixed(2)
            // formula fahrenheit
            fahrenheitEl.value = ((currentValue - 272.32) * 1.8 + 32).toFixed(2)

            break;

        default:
            break
    }


}