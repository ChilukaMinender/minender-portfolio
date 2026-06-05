// ===========================
// TYPING ANIMATION
// ===========================

const typingText = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "Python Developer",
    "Software Engineer",
    "Problem Solver",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

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

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });

});


// ===========================
// SCROLL REVEAL
// ===========================

const revealElements =
document.querySelectorAll(
".section, .project-card, .skill-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";
        }
    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all 0.8s ease";
});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ===========================
// SMOOTH BUTTON EFFECT
// ===========================

document.querySelectorAll(".btn")
.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
            "translateY(-4px)";
        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
            "translateY(0)";
        }
    );

});


// ===========================
// MOBILE MENU
// ===========================

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    if(navMenu.style.display==="flex"){

        navMenu.style.display="none";

    }else{

        navMenu.style.display="flex";
        navMenu.style.flexDirection="column";
        navMenu.style.position="absolute";
        navMenu.style.top="80px";
        navMenu.style.right="20px";
        navMenu.style.padding="20px";
        navMenu.style.borderRadius="15px";
        navMenu.style.background="#111827";
    }

});
}