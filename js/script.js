/* =========================================================
   ZAIDAN PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            menuBtn.textContent =
                navMenu.classList.contains("open")
                    ? "✕"
                    : "☰";

        });


        // Close menu after clicking a link

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuBtn.textContent = "☰";

            });

        });

    }


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeBtn = document.getElementById("themeBtn");

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        if (themeBtn) {
            themeBtn.textContent = "☾";
        }

    }


    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const isLight =
                document.body.classList.contains("light");

            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );

            themeBtn.textContent =
                isLight ? "☾" : "☼";

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            "#navMenu a"
        );


    const sectionObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const current =
                            entry.target.getAttribute("id");


                        navLinks.forEach(link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute("href")
                                === `#${current}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },

            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }

        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       SMOOTH PROJECT HOVER EFFECT
    ===================================================== */

    const projectItems =
        document.querySelectorAll(
            ".project-item"
        );


    projectItems.forEach(project => {

        project.addEventListener(
            "mousemove",
            event => {

                const rect =
                    project.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                project.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                project.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }
        );

    });


    /* =====================================================
       PROFILE PARALLAX
    ===================================================== */

    const profileCard =
        document.querySelector(
            ".profile-card"
        );


    if (profileCard && window.innerWidth > 900) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (window.innerWidth / 2 - event.clientX)
                    / 80;

                const y =
                    (window.innerHeight / 2 - event.clientY)
                    / 80;


                profileCard.style.transform =
                    `rotate(3deg)
                     translate(${x}px, ${y}px)`;

            }
        );


        profileCard.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "rotate(3deg)";

            }
        );

    }


    /* =====================================================
       YEAR
    ===================================================== */

    const currentYear =
        new Date().getFullYear();


    const footerYear =
        document.querySelector(
            "footer"
        );


    // Future-proof: if you later add
    // <span id="year"></span>

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            currentYear;

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navMenu
            ) {

                navMenu.classList.remove(
                    "open"
                );

                if (menuBtn) {
                    menuBtn.textContent = "☰";
                }

            }

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cZaidan Portfolio",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "Built with HTML, CSS & JavaScript 🚀"
    );

});