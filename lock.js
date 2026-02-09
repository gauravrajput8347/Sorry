function checkPassword() {
    const correctPassword = "forever";  // 🔴 CHANGE THIS
    const entered = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (entered === correctPassword) {
        window.location.href = "home.html";
    } else {
        error.innerHTML = "That’s not it… but it’s okay, try again ❤️";
    }
}
