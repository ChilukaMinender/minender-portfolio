// ========================================
// 1. TYPING ANIMATION
// ========================================

const typingText = document.getElementById("typing");

const roles = [
    "Python Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

if (typingText) {
    typeEffect();
}



// ========================================
// 2. MOBILE NAVIGATION MENU
// ========================================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }
        }

    });


    // Close menu after clicking a navigation link

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}



// ========================================
// 3. ACTIVE NAVIGATION HIGHLIGHT
// ========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();



// ========================================
// 4. SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .internship-card, .education-card, .achievement-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal-element");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("reveal-visible");

    });

}



// ========================================
// 5. BUTTON HOVER EFFECT
// ========================================

const buttons = document.querySelectorAll(
    ".btn, .project-buttons a"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});



// ========================================
// 6. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// ========================================

document.addEventListener("click", (event) => {

    if (
        menuBtn &&
        navMenu &&
        !menuBtn.contains(event.target) &&
        !navMenu.contains(event.target)
    ) {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});



// ========================================
// 7. FOOTER CURRENT YEAR
// ========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Chiluka Minender | Built with HTML, CSS & JavaScript`;

}