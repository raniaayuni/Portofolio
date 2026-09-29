// ==========================================
// PORTFOLIO INTERACTIONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (mobileMenuButton && mobileMenu) {

        mobileMenuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("active");
            });
        });
    }


    // ==========================================
    // SCROLL REVEAL ANIMATION
    // ==========================================

    const revealElements = document.querySelectorAll(
        ".section-heading, .card, .skill-card, .project-card, " +
        ".timeline-item, .contact-card, .hero-info"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    // ==========================================
    // FLOATING PARTICLES
    // ==========================================

    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "portfolio-particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            (Math.random() * 8) + "s";

        particle.style.width =
            (3 + Math.random() * 5) + "px";

        particle.style.height =
            particle.style.width;

        document.body.appendChild(particle);
    }


    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});
