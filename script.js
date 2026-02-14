const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const noTexts = [
  "Are you sure?",
  "Confirmed?",
  "Pretty please?",
  "Think again 😢",
  "Last chance 💔",
  "Really really sure?",
  "Okay… click Yes 💖"
];

let noClickCount = 0;

noBtn.addEventListener("click", () => {
  if (noClickCount < noTexts.length) {
    noBtn.textContent = noTexts[noClickCount];
    noClickCount++;
  } else {
    noBtn.textContent = "Yes 💖";
    noBtn.classList.remove("no");
    noBtn.classList.add("yes");
    noBtn.onclick = showLove;
  }
});

yesBtn.addEventListener("click", showLove);

function showLove() {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  startHearts();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
