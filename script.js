const text = "Aditya Kumar"; // Replace with your name
let index = 0;
const speed = 200; // Adjust speed (Lower = Faster, Higher = Slower)

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

// Initialize particles.js
function particlesInit() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", random: false }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        }
    });
}

// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Run both functions when the page loads
window.onload = () => {
    setTimeout(typeEffect, 500); // Start typing effect after delay
    particlesInit(); // Initialize particles.js
};
