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

// --- Efek Mengetik (Typing Effect) (Kode Baru) ---

const typingTextElement = document.getElementById("typing-text");

// Hanya jalankan jika elemen ditemukan di HTML
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
    let pauseTime = 1500; // Jeda sebelum mulai menghapus

    function type() {
        const currentText = textsToType[textIndex];
        
        if (isDeleting) {
            // Proses menghapus
            charIndex--;
            typingTextElement.textContent = currentText.substring(0, charIndex);
            
            if (charIndex <= 0) {
                isDeleting = false;
                // Pindah ke teks berikutnya
                textIndex = (textIndex + 1) % textsToType.length; 
                setTimeout(type, 500); // Jeda sebentar sebelum mulai mengetik teks baru
                return;
            }
        } else {
            // Proses mengetik
            charIndex++;
            typingTextElement.textContent = currentText.substring(0, charIndex);
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, pauseTime); // Jeda setelah selesai mengetik
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