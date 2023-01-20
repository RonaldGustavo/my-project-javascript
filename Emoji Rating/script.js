const starEl = document.querySelectorAll(".fa-star");

const emojisEl = document.querySelectorAll(".fa-regular");

const btnSubmit = document.querySelector(".btn-submit")

const colorArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);

starEl.forEach((starElParameter, index) => {
    starElParameter.addEventListener("click", () => {
        updateRating(index);

    });
});

function updateRating(index) {
    starEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });
    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = "translateX(" + index * -50 + "px)";
        emojiEl.style.color = colorArray[index]
    });
}

btnSubmit.addEventListener("click", () => {
    alert("Your Rating Have been Submited!")
    location.reload();

})

