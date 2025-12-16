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

// --- (TYPING EFFECT) ---

const typingTextElement = document.getElementById("typing-text");
const textsToType = ["Software Engineering", "Desain Digital", "Content Creation", "Logika dan Kreativitas"]; // Teks yang akan bergantian
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 75;
let pauseTime = 1500;

function type() {
    const currentText = textsToType[textIndex];
    
    if (isDeleting) {
        charIndex--;
        typingTextElement.textContent = currentText.substring(0, charIndex);
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textsToType.length;
            setTimeout(type, 500);
            return;
        }
    } else {
        charIndex++;
        typingTextElement.textContent = currentText.substring(0, charIndex);
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
            return;
        }
    }
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, delay);
}
document.addEventListener("DOMContentLoaded", () => {
    typingTextElement.textContent = ""; 
    type();
});