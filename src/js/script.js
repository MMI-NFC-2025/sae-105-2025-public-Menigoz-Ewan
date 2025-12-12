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

// Filters: toggle active state on Programme page
document.addEventListener('DOMContentLoaded', function () {
    const filterGroups = document.querySelectorAll('.filtre-boutons');
    if (!filterGroups.length) return;

    filterGroups.forEach(group => {
        group.addEventListener('click', (event) => {
            const btn = event.target.closest('.btn-filtre');
            if (!btn) return;
            group.querySelectorAll('.btn-filtre').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});

// Partners carousel script
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.partners-carousel__track');
    const prev = document.querySelector('.partners-carousel__nav--prev');
    const next = document.querySelector('.partners-carousel__nav--next');
    if (!track || !prev || !next) return;

    const itemWidth = () => track.querySelector('.partners-carousel__item').getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);

    prev.addEventListener('click', () => {
        track.scrollBy({ left: -itemWidth(), behavior: 'smooth' });
    });
    next.addEventListener('click', () => {
        track.scrollBy({ left: itemWidth(), behavior: 'smooth' });
    });
});
