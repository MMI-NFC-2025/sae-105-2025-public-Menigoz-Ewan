// Gestion du menu mobile
// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Récupère le bouton de toggle du menu
    const toggle = document.getElementById('navToggle');
    // Récupère l'élément de navigation
    const nav = document.getElementById('siteNav');

    // Si l'un des éléments n'existe pas, on arrête l'exécution
    if (!toggle || !nav) return;

    // Ajoute un écouteur d'événement au clic sur le bouton toggle
    toggle.addEventListener('click', function () {
        // Bascule la classe 'open' et stocke l'état (ouvert/fermé)
        const isOpen = toggle.classList.toggle('open');
        // Met à jour les attributs ARIA pour l'accessibilité et le CSS
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
});

// Filtres : gestion de l'état actif sur la page Programme
// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Récupère tous les groupes de boutons de filtres
    const filterGroups = document.querySelectorAll('.filtre-boutons');
    // Si aucun groupe n'existe, on arrête l'exécution
    if (!filterGroups.length) return;

    // Pour chaque groupe de filtres
    filterGroups.forEach(group => {
        // Ajoute un écouteur d'événement au clic sur le groupe
        group.addEventListener('click', (event) => {
            // Trouve le bouton cliqué le plus proche
            const btn = event.target.closest('.btn-filtre');
            // Si aucun bouton n'a été cliqué, on arrête
            if (!btn) return;
            // Retire la classe 'active' de tous les boutons du groupe
            group.querySelectorAll('.btn-filtre').forEach(b => b.classList.remove('active'));
            // Ajoute la classe 'active' au bouton cliqué
            btn.classList.add('active');
        });
    });
});

// Carrousel des partenaires
// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Récupère l'élément contenant les items du carrousel
    const track = document.querySelector('.partners-carousel__track');
    // Récupère les boutons de navigation (précédent et suivant)
    const prev = document.querySelector('.partners-carousel__nav--prev');
    const next = document.querySelector('.partners-carousel__nav--next');
    // Si l'un des éléments n'existe pas, on arrête l'exécution
    if (!track || !prev || !next) return;

    // Fonction qui calcule la largeur d'un item (largeur + espacement)
    const itemWidth = () => track.querySelector('.partners-carousel__item').getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);

    // Ajoute un écouteur d'événement au clic sur le bouton précédent
    prev.addEventListener('click', () => {
        // Fait défiler le carrousel vers la gauche d'une largeur d'item
        track.scrollBy({ left: -itemWidth(), behavior: 'smooth' });
    });
    // Ajoute un écouteur d'événement au clic sur le bouton suivant
    next.addEventListener('click', () => {
        // Fait défiler le carrousel vers la droite d'une largeur d'item
        track.scrollBy({ left: itemWidth(), behavior: 'smooth' });
    });
});

// Formulaires de recherche du menu : ajoute le filtre de site avant l'envoi
document.addEventListener('DOMContentLoaded', function () {
    const searchForms = document.querySelectorAll('[data-site-search]');
    if (!searchForms.length) return;

    searchForms.forEach(form => {
        const input = form.querySelector('input[name="q"]');
        if (!input) return;

        form.addEventListener('submit', () => {
            const siteSuffix = 'site:mmimontbeliard.com';
            if (input.value && !input.value.includes(siteSuffix)) {
                input.value = `${input.value} ${siteSuffix}`.trim();
            }
        });
    });
});

// Page de résultats de recherche
// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne les éléments où afficher la requête et le contenu
    const resultsQuery = document.getElementById('searchResultsQuery');
    const resultsContent = document.getElementById('searchResultsContent');

    // Si la page n'a pas de zone de résultats, on arrête
    if (!resultsQuery) return;

    // Récupère le paramètre ?q= dans l'URL
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');

    // Si aucun terme n'est fourni, on invite l'utilisateur à lancer une recherche
    if (!query) {
        resultsQuery.textContent = 'votre recherche';
        if (resultsContent) {
            resultsContent.innerHTML = '';
            const placeholder = document.createElement('p');
            placeholder.className = 'search-results__empty';
            placeholder.textContent = 'Saisissez un mot-clé dans le menu pour lancer une recherche.';
            resultsContent.appendChild(placeholder);
        }
        return;
    }

    // Affiche le terme recherché et un message placeholder
    resultsQuery.textContent = `"${query}"`;
    if (resultsContent) {
        resultsContent.innerHTML = '';
        const empty = document.createElement('p');
        empty.className = 'search-results__empty';
        empty.textContent = `Aucun résultat pour "${query}" pour le moment.`;
        resultsContent.appendChild(empty);
    }
});
