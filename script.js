let opened = false;

function openLetter() {
  if (!opened) {
    const letter = document.getElementById("letter");
    const emoji_heart = document.getElementById("emoji_heart");
    const emoji_bear = document.getElementById("emoji_bear");
    const emoji_cake = document.getElementById("emoji_cake");

    document.getElementById("top_envelope").classList.add("open");
    letter.classList.add("show");
    emoji_heart.classList.add("hide"); 
    emoji_bear.classList.add("hide");
    emoji_cake.classList.add("show");
    opened = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.querySelector(".envelope");
  envelope.addEventListener("click", openLetter);
});