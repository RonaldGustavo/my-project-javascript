const countDay = document.getElementById("day");
const countHour = document.getElementById("hour");
const countMinute = document.getElementById("minute");
const countSecond = document.getElementById("second");
const newYear = document.querySelector(".year");
const dateHidden = document.querySelector(".date");
const btnReset = document.querySelector(".btn_reset");
// const newYearDate = new Date("jan 15, 2023 00:04:55").getTime();

const textP = document.querySelector(".p_text");
const btnRun = document.querySelector(".btn_run");

btnRun.addEventListener("click", () => {
  if ((inputDate = document.querySelector(".date").value)) {
    var x = setInterval(function () {
      const newYearDate = new Date(inputDate);
      const now = new Date().getTime();
      const gap = newYearDate - now;

      var days = Math.floor(gap / (1000 * 60 * 60 * 24));
      var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((gap % (1000 * 60)) / 1000);

      countDay.innerHTML = days;
      countHour.innerHTML = hours;
      countMinute.innerHTML = minutes;
      countSecond.innerHTML = seconds;

      newYear.innerText = inputDate;
      if (gap < 0) {
        console.log("gagal");
        clearInterval(x);
        countDay.innerHTML = "00";
        countHour.innerHTML = "00";
        countMinute.innerHTML = "00";
        countSecond.innerHTML = "00";

        location.reload();
        alert("masukin timer kembali waktu lebih besar dari date sekarang!");
      } else if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
        console.log("berhasil");
        clearInterval(x);
        // alert("berhasil");
        newYear.innerText = "Time Out";
        dateHidden.classList.add("hidden");
        btnReset.classList.remove("hidden");
        btnReset.classList.add("active");
        btnRun.classList.add("hidden");
        textP.classList.add("hidden");
        btnReset.addEventListener("click", () => {
          location.reload();
        });
      }
    });
  } else {
    alert("input your timer first!");
  }
});
