// hamburger
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    hamburger.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('open');
    });
});
