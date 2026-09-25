       /* ========================================
   SAJJAN KUMAR - PORTFOLIO JAVASCRIPT
======================================== */

// ---------- MOBILE MENU ----------

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

// Close mobile menu when a navigation link is clicked

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ---------- ACTIVE NAVIGATION ----------

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") ===  `#${currentSection}`) {
            link.classList.add("active");
        }
    });

});


// ---------- PROJECT FILTERS ----------

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const selectedFilter = button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// ---------- CONTACT FORM ----------

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector("textarea");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been received.`);

        contactForm.reset();

    });

}


// ---------- PROJECT LINK PLACEHOLDER ----------

// Prevent empty project links from jumping to the top

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(link => {

    link.addEventListener("click", (event) => {
        event.preventDefault();

        alert("Project details will be available soon.");

    });

});


// ---------- 3D MOUSE MOVEMENT EFFECT ----------

const heroVisual = document.querySelector(".hero-visual");
const designerOrb = document.querySelector(".designer-orb");

if (heroVisual && designerOrb) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = heroVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;

        designerOrb.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    heroVisual.addEventListener("mouseleave", () => {

        designerOrb.style.transform =
            "rotateX(12deg) rotateY(-15deg)";

    });

}


// ---------- SCROLL REVEAL ANIMATION ----------

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .timeline-item, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ---------- CONSOLE MESSAGE ----------

console.log("Sajjan Kumar Portfolio Loaded Successfully!");