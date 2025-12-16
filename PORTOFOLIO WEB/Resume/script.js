const toggleBtn = document.getElementById("modeToggle");
const body = document.body;
function setModeButton(isDark) {
    if (toggleBtn) {
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
    }
}
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    setModeButton(true);
} else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    setModeButton(false);
}
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        const isDark = body.classList.contains("dark-mode");

        localStorage.setItem("mode", isDark ? "dark" : "light");
        setModeButton(isDark);
    });
}
