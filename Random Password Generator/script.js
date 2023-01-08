const btnEl = document.querySelector(".btn-generate");

const inputEl = document.getElementById("input");

// untuk select id atau class yang ingin dibuat function
const copyIconEl = document.querySelector(".fa-copy");

const notificationCopied = document.querySelector(".alert-container");

// agar button dapat diclick
btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();

  // classlist = untuk setting element class
  notificationCopied.classList.remove("active");

  // untuk menghilangkan notifikasi
  setTimeout(() => {
    notificationCopied.classList.add("active");
  }, 3000);
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 10;

  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random(chars) * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, password);
  }

  inputEl.value = password;

  // untuk menampilkan notifikasi
  notificationCopied.innerHTML = password + " copied! ";
}

function copyPassword() {
  // untuk mengetahui yang diselect
  inputEl.select();

  // untuk select mobile
  inputEl.setSelectionRange(0, 888);

  // untuk copy text
  navigator.clipboard.writeText(inputEl.value);
}
