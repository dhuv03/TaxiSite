// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// DOM Content Loaded - Initialize all interactions
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements with error handling
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li a');
    const formWrapper = document.querySelector('.form-wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginNav = document.getElementById('login-nav');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');

    // Toggle no-scroll class on body
    function toggleNoScroll() {
        if (formWrapper && (formWrapper.style.display === 'block' || (menu && menu.classList.contains('active')))) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    // Hamburger menu toggle
    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
            toggleNoScroll();
        });

        // Add keyboard support for hamburger
        hamburger.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menu.classList.toggle('active');
                hamburger.classList.toggle('active');
                toggleNoScroll();
            }
        });
    }

    // Close menu when clicking menu links
    if (menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu) menu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Show form wrapper and overlay when clicking Login
    if (loginNav && formWrapper && overlay) {
        loginNav.addEventListener('click', (e) => {
            e.preventDefault();
            formWrapper.style.display = 'block';
            overlay.style.display = 'block';
            overlay.setAttribute('aria-hidden', 'false');
            toggleNoScroll();
        });
    }

    // Toggle between login and register forms
    if (registerLink && formWrapper) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            formWrapper.classList.add('active');
        });
    }

    if (loginLink && formWrapper) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            formWrapper.classList.remove('active');
        });
    }

    // Close form wrapper and overlay
    if (closeBtn && formWrapper && overlay) {
        closeBtn.addEventListener('click', () => {
            formWrapper.style.display = 'none';
            overlay.style.display = 'none';
            overlay.setAttribute('aria-hidden', 'true');
            toggleNoScroll();
        });
    }

    // Initialize ScrollReveal animations
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 2500,
            delay: 400
        });

        ScrollReveal().reveal('.sec-01, .image', { delay: 300, origin: 'bottom' });
        ScrollReveal().reveal('.text-box', { delay: 300, origin: 'right', interval: 200 });
        ScrollReveal().reveal('.textbox', { delay: 300, origin: 'right', interval: 200 });
        ScrollReveal().reveal('.sec-02, .image', { delay: 300, origin: 'top' });
        ScrollReveal().reveal('.about-section', { delay: 300, origin: 'top' });
        ScrollReveal().reveal('.card1', { delay: 300, origin: 'left', interval: 200 });
        ScrollReveal().reveal('.card2', { delay: 300, origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.card3', { delay: 300, origin: 'right', interval: 200 });
        ScrollReveal().reveal('.main-title', { delay: 300, origin: 'left', interval: 200 });
        ScrollReveal().reveal('.taxi-model .slider .item', { delay: 500, origin: 'top' });
    }
});