const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
        if (entry.isIntersecting) {
            document.querySelector(".nav-menu a.active").classList.remove("active");
            menuLink.classList.add("active");
        }
    });
}, {rootMargin: "-45% 0% -40% 0%"});

menuLinks.forEach(link => {
    const hash = link.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
        observador.observe(target);
    }
});