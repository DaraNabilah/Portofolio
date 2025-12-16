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

// --- Fungsionalitas 2: Efek Parallax Sederhana pada Navbar ---
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// --- Fungsionalitas 3: Efek Animasi Saat Scroll (Reveal on Scroll) ---

const revealElements = document.querySelectorAll(
    ".profile-intro-section, .detail-card, .page-title, footer"
);

const revealClass = "reveal-active";

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];

        const elementTop = element.getBoundingClientRect().top;
 
        const revealPoint = 150; 

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add(revealClass);
        } 
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// --- Fungsionalitas 4: Efek Mengetik (Typing Effect) ---

const typingTextElement = document.getElementById("typing-text");

if (typingTextElement) {
    const textsToType = [
        "pengetahuan logis dari IT dengan sentuhan kreativitas di bidang Desain Digital.", 
        "Logika & Kreativitas", 
        "Software Engineering", 
        "Desain Digital",
        "Content Creation"
    ]; 
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 75;
    let deletingSpeed = 40;
    let pauseTime = 1500;

    function type() {
        const currentText = textsToType[textIndex];
        
        if (isDeleting) {
            charIndex--;
            typingTextElement.textContent = currentText.substring(0, charIndex);
            
            if (charIndex <= 0) {
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
}