const countDay = document.getElementById("day");
const countHour = document.getElementById("hour");
const countMinute = document.getElementById("minute");
const countSecond = document.getElementById("second");

const newYearDate = new Date("jan 1, 2024 00:00:00").getTime();

function updateCountDown() {
  const now = new Date().getTime();
  const gap = newYearDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const remainingDay = Math.floor(gap / day);
  const remainingHour = Math.floor((gap % day) / hour);
  const remainingMinute = Math.floor((gap % hour) / minute);
  const remainingSecond = Math.floor((gap % minute) / second);

  countDay.innerText = remainingDay;
  countHour.innerText = remainingHour;
  countMinute.innerText = remainingMinute;
  countSecond.innerText = remainingSecond;

  //   membuat waktu berjalan
  setTimeout(updateCountDown, 1000);
}

updateCountDown();
