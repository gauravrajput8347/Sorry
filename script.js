// ❤️ Typing animation
const text = document.getElementById("typing-text");
if (text) {
    const message = text.innerHTML;
    text.innerHTML = "";
    let i = 0;
    function typeEffect() {
        if (i < message.length) {
            text.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeEffect, 40);
        }
    }
    typeEffect();
}

// 💕 Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// 🎵 Music (mobile-friendly)
const music = document.getElementById("bg-music");
document.body.addEventListener("click", () => {
    if (music) music.play();
}, { once: true });
