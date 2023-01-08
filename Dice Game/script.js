const buttonRoll = document.querySelector(".btn_roll");
const notificationCopied = document.querySelector(".alert-container");
const buttonPlay = document.querySelector(".btn_play");

buttonRoll.addEventListener("click", () => {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  const images1 = "images/dice" + randomNumber1 + ".png";
  const images2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", images1);
  document.querySelector(".dice .img2").setAttribute("src", images2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = "Player 1 Wins";
    document.querySelector(".winner").style.visibility = "visible";
    document.querySelector(".heading_winner").innerHTML = "The Winner is";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".winner").innerHTML = "Player 2 Wins";
    document.querySelector(".winner").style.visibility = "visible";
    document.querySelector(".heading_winner").innerHTML = "The Winner is";
  } else {
    document.querySelector(".winner").innerHTML = "Draw";
    document.querySelector(".winner").style.visibility = "visible";
    document.querySelector(".heading_winner").innerHTML = "The Winner is";
  }

  if (randomNumber1 === randomNumber2) {
    // classlist = untuk setting element class
    notificationCopied.classList.remove("active");

    // untuk menghilangkan notifikasi
    setTimeout(() => {
      notificationCopied.classList.add("active");
    }, 2000);
  } else {
    buttonRoll.disabled = true;
  }
});

buttonPlay.addEventListener("click", () => {
  location.reload();
});
