//untuk mengetahui jumlah dari button class .drum
var countOfButton = document.querySelectorAll(".drum").length;

var noteDrum = document.querySelector(".note");
var btnNote = document.querySelector(".btn_note");
var btnCloseNote = document.querySelector(".fa-square-xmark");

btnNote.addEventListener("click", () => {
  noteDrum.classList.remove("active");
});

btnCloseNote.addEventListener("click", () => {
  noteDrum.classList.add("active");
});

for (var i = 0; i < countOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    buttonDrumSound(buttonInnerHTML);
  });
}

// keyboard key for drum sound
document.addEventListener("keyup", (event) => {
  if (event.key === "a") {
    var audioTom1 = new Audio("sounds/kick-bass.mp3");
    audioTom1.play();
    buttonPressedKick();
  } else if (event.key === "s") {
    var audioTom2 = new Audio("sounds/snare.mp3");
    audioTom2.play();
    buttonPressedSnare();
  } else if (event.key === "j") {
    var audioTom3 = new Audio("sounds/hi-hat.mp3");
    audioTom3.play();
    buttonPressedHiHat();
  } else if (event.key === "k") {
    var audioTom4 = new Audio("sounds/crash.mp3");
    audioTom4.play();
    buttonPressedCrash();
  } else if (event.key === "x") {
    var audioSnare = new Audio("sounds/tom-1.mp3");
    audioSnare.play();
    buttonPressedTom1();
  } else if (event.key === "c") {
    var audioCrash = new Audio("sounds/tom-2.mp3");
    audioCrash.play();
    buttonPressedTom2();
  } else if (event.key === "n") {
    var audioKick = new Audio("sounds/tom-3.mp3");
    audioKick.play();
    buttonPressedTom3();
  } else if (event.key === "m") {
    var audioKick = new Audio("sounds/tom-4.mp3");
    audioKick.play();
    buttonPressedTom4();
  }
});

//Animation
function buttonPressedKick() {
  var activeButton = document.querySelector(".kick");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedSnare() {
  var activeButton = document.querySelector(".snare");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedHiHat() {
  var activeButton = document.querySelector(".hi-hat");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedCrash() {
  var activeButton = document.querySelector(".crash");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedTom1() {
  var activeButton = document.querySelector(".tom1");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedTom2() {
  var activeButton = document.querySelector(".tom2");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedTom3() {
  var activeButton = document.querySelector(".tom3");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

function buttonPressedTom4() {
  var activeButton = document.querySelector(".tom4");

  activeButton.classList.add("pressedButton");

  setTimeout(() => {
    activeButton.classList.remove("pressedButton");
  }, 150);
}

// button sound when Clicked
function buttonDrumSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "a":
      var audioTom1 = new Audio("sounds/kick-bass.mp3");
      audioTom1.play();
      buttonPressedKick();
      break;

    case "s":
      var audioTom2 = new Audio("sounds/snare.mp3");
      audioTom2.play();
      buttonPressedSnare();
      break;

    case "j":
      var audioTom3 = new Audio("sounds/hi-hat.mp3");
      audioTom3.play();
      buttonPressedHiHat();
      break;

    case "k":
      var audioTom4 = new Audio("sounds/crash.mp3");
      audioTom4.play();
      buttonPressedCrash();
      break;

    case "x":
      var audioSnare = new Audio("sounds/tom-1.mp3");
      audioSnare.play();
      buttonPressedTom1();
      break;

    case "c":
      var audioCrash = new Audio("sounds/tom-2.mp3");
      audioCrash.play();
      buttonPressedTom2();
      break;

    case "n":
      var audioKick = new Audio("sounds/tom-3.mp3");
      audioKick.play();
      buttonPressedTom3();
      break;

    case "m":
      var audioKick = new Audio("sounds/tom-4.mp3");
      audioKick.play();
      buttonPressedTom4();
      break;

    // else
    default:
      console.log(buttonInnerHTML);
  }
}
