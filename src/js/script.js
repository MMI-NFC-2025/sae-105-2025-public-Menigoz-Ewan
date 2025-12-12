// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('siteNav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const isOpen = toggle.classList.toggle('open');
        // reflect state for assistive tech and CSS
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
});
