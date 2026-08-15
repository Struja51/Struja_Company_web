const body = document.body;
const scrollIndicator = document.querySelector('.scroll-indicator');
const aboutSection = document.getElementById('about');
const floatingBubble = document.getElementById('floatingBubble');

function updateHeroState() {
    const isScrolled = window.scrollY > 1;
    body.classList.toggle('scrolled', isScrolled);

    const shouldCollapse = window.scrollY > 140;
    const shouldExpand = window.scrollY < 90;

    if (shouldCollapse) {
        body.classList.add('collapsed');
        floatingBubble?.classList.add('visible');
    } else if (shouldExpand) {
        body.classList.remove('collapsed');
        floatingBubble?.classList.remove('visible');
    }
}

function collapseHero() {
    body.classList.add('collapsed');
    floatingBubble?.classList.add('visible');
}

function scrollToAbout() {
    if (aboutSection) {
        const top = aboutSection.offsetTop - 70;
        window.scrollTo({ top, behavior: 'auto' });
    }
}

if (window.location.hash === '#about') {
    collapseHero();
    setTimeout(scrollToAbout, 100);
}

scrollIndicator?.addEventListener('click', (event) => {
    event.preventDefault();
    collapseHero();
    history.replaceState(null, '', '#about');
    scrollToAbout();
});

floatingBubble?.addEventListener('click', () => {
    body.classList.remove('collapsed');
    floatingBubble?.classList.remove('visible');
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'auto' });
});

window.addEventListener('hashchange', () => {
    if (window.location.hash === '#about') {
        collapseHero();
        setTimeout(scrollToAbout, 100);
    }
});

window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateHeroState);
}, { passive: true });
window.addEventListener('resize', updateHeroState);
updateHeroState();