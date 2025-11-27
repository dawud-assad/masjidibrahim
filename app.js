document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    requestAnimationFrame(() => {
        body.classList.add("fade-in");
    });

    const transitionLinks = document.querySelectorAll('a[data-transition]');

    transitionLinks.forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");
            const isExternal = link.target === "_blank" || (href && href.startsWith("http"));
            const isAnchor = href && href.startsWith("#");

            if (!href || isExternal || isAnchor) {
                return;
            }

            event.preventDefault();
            body.classList.add("is-transitioning");

            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    });
});

window.addEventListener("pageshow", event => {
    if (event.persisted) {
        document.body.classList.remove("is-transitioning");
    }
});

