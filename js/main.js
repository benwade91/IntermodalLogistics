// Listener to turn nav transparent when scrolling away from top
const nav = document.querySelector('#navbar');
const mobileNavButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu-list');
let mobileMenuOpen = false;


mobileNavButton.addEventListener('click', () => {
    if (mobileMenuOpen) {
        mobileMenu.style.display = 'none';
        mobileMenuOpen = false;
    }
    else {
        mobileMenu.style.display = 'block';
        mobileMenuOpen = true;
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-transparent');
        mobileMenu.style.top = '65px';
        mobileMenu.style.display = 'none';
        mobileMenuOpen = false;
    } else {
        nav.classList.remove('nav-transparent');
        mobileMenu.style.top = '90px';
        mobileMenu.style.display = 'none';
        mobileMenuOpen = false;
    }
});