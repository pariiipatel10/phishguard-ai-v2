// PAGE LOADER

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// SMOOTH BUTTON GLOW EFFECT

const buttons =
    document.querySelectorAll(
        ".btn, .scan-btn"
    );

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.boxShadow =
                "0 0 40px #00ffe0";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.boxShadow =
                "0 0 20px #00ffe0";

        }
    );

});

// NAVBAR SCROLL EFFECT

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if (window.scrollY > 20) {

            navbar.style.background =
                "rgba(0,0,0,0.8)";

            navbar.style.boxShadow =
                "0 0 20px rgba(0,255,224,0.3)";

        }

        else {

            navbar.style.background =
                "rgba(0,0,0,0.3)";

            navbar.style.boxShadow =
                "none";

        }

    }
);

// FADE IN ANIMATION

const cards =
    document.querySelectorAll(
        ".feature-card, .dashboard-card, .result-container"
    );

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity =
                    "1";

                entry.target.style.transform =
                    "translateY(0px)";
            }

        });

    });

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);

});

// TYPING HERO EFFECT

const heroTitle =
    document.querySelector(
        ".hero-content h1"
    );

if (heroTitle) {

    const originalText =
        heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    function typeHero() {

        if (i < originalText.length) {

            heroTitle.innerHTML +=
                originalText.charAt(i);

            i++;

            setTimeout(typeHero, 40);

        }

    }

    typeHero();

}
// TOAST NOTIFICATION

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.classList.add("toast");

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}

// BUTTON TOASTS

const scanButtons =
    document.querySelectorAll(
        ".scan-btn"
    );

scanButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showToast(
                "AI Threat Analysis Started 🚀"
            );

        }
    );

});
// ROUTE PROTECTION

const protectedPages = [

    "dashboard.html",
    "email.html",
    "url.html",
    "chatbot.html"

];

const currentPage =
    window.location.pathname
        .split("/")
        .pop();

const isLoggedIn =
    localStorage.getItem(
        "isLoggedIn"
    );

if (

    protectedPages.includes(
        currentPage
    ) &&

    isLoggedIn !== "true"

) {

    alert(
        "Please login first."
    );

    window.location.href =
        "login.html";

}
