// wlecome
let userName = prompt("Halo! Siapa nama kamu?");

if (userName === null || userName.trim() === "") {
  userName = "Name";
}

document.getElementById("welcomeText").innerText =
  "Hi " + userName + ", Welcome To Website";

// form submit
const form = document.getElementById("messageForm");
const errorText = document.getElementById("errorText");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const birth = document.getElementById("birthInput").value;
  const message = document.getElementById("messageInput").value.trim();
  const genderEl = document.querySelector('input[name="gender"]:checked');

  if (name === "" || birth === "" || message === "" || !genderEl) {
    errorText.innerText = "Semua field harus diisi!";
    return;
  }

  errorText.innerText = "";

  document.getElementById("timeNow").innerText = new Date().toString();
  document.getElementById("outName").innerText = name;
  document.getElementById("outBirth").innerText = birth;
  document.getElementById("outGender").innerText = genderEl.value;
  document.getElementById("outMessage").innerText = message;
});


// sidebar mobile
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

function openMenu() {
  mobileMenu.classList.remove("hidden");
  mobileOverlay.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  mobileOverlay.classList.add("hidden");
}

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

