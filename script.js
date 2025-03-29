// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation (Using JavaScript)
const typingElement = document.getElementById('typing-animation');
const textArray = ['Developer', 'Designer', 'Freelancer'];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = textArray[textIndex].substring(0, charIndex + 1);
        charIndex++;
    }

    typingElement.textContent = `I am a ${currentText}`;

    if (!isDeleting && charIndex === textArray[textIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && charIndex === 0) {
        textIndex = (textIndex + 1) % textArray.length;
        isDeleting = false;
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

type();

// Mobile Menu Toggle (for small screens)
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});

// GSAP Animations (GreenSock)
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".btn-primary", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

// Scroll Animation for Skill Cards
gsap.from(".skill-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    delay: 0.3
});

// Contact Form Submit (Example)
document.querySelector("#contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
});
