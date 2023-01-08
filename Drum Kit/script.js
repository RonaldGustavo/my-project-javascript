//untuk mengetahui jumlah dari button class .drum
var countOfButton = document.querySelectorAll(".drum").length;

var noteDrum = document.querySelector(".note");
var btnNote = document.querySelector(".btn_note");
var btnCloseNote = document.querySelector(".fa-square-xmark");

btnNote.addEventListener("click", () => {
  // classlist = untuk setting element class
  noteDrum.classList.remove("active");
});

btnCloseNote.addEventListener("click", () => {
  noteDrum.classList.add("active");
});

for (var i = 0; i < countOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    buttonDrumSound(buttonInnerHTML);

    buttonPressed(buttonInnerHTML);
  });
}

document.addEventListener("keypress", (event) => {
  buttonDrumSound(event.key);
});

function buttonDrumSound(key) {
  switch (key) {
    case "a":
      var audioTom1 = new Audio("sounds/kick-bass.mp3");
      audioTom1.play();
      break;

    case "s":
      var audioTom2 = new Audio("sounds/snare.mp3");
      audioTom2.play();
      break;

    case "j":
      var audioTom3 = new Audio("sounds/hi-hat.mp3");
      audioTom3.play();
      break;

    case "k":
      var audioTom4 = new Audio("sounds/crash.mp3");
      audioTom4.play();
      break;

    case "x":
      var audioSnare = new Audio("sounds/tom-1.mp3");
      audioSnare.play();
      break;

    case "c":
      var audioCrash = new Audio("sounds/tom-2.mp3");
      audioCrash.play();
      break;

    case "n":
      var audioKick = new Audio("sounds/tom-3.mp3");
      audioKick.play();
      break;

    case "m":
      var audioKick = new Audio("sounds/tom-4.mp3");
      audioKick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonPressed(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}
