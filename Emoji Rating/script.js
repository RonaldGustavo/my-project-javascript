const starEl = document.querySelectorAll(".fa-star");

const emojisEl = document.querySelectorAll(".fa-regular");

const btnSubmit = document.querySelector(".btn-submit")

starEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
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
    });
}

btnSubmit.addEventListener("click", ()=> {
            alert("Thank Your for Submit")
            location.reload();
    
})

