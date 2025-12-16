const toggleBtn = document.getElementById("modeToggle");
const body = document.body;
function setModeButton(isDarkMode) {
    toggleBtn.textContent = isDarkMode ? "☀️" : "🌙"; 
}

const storedMode = localStorage.getItem("mode");

if (storedMode === "dark") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    setModeButton(true);
} else {
    body.classList.add("light-mode");
    localStorage.setItem("mode", "light"); 
    setModeButton(false);
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    const isNowDarkMode = body.classList.contains("dark-mode");
    if (isNowDarkMode) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    } 
    setModeButton(isNowDarkMode);
});