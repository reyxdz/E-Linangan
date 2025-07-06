// Slider Logic
let items = document.querySelectorAll('.slider .list .item');

// CONFIG PARAMETER
let countItem = items.length;
let itemActive = 0;

let refreshInterval = setInterval(() => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}, 3000);


function showSlider() {
    // REMOVE OLD ACTIVE ITEM
    items.forEach(item => item.classList.remove('active'));
    // NEW ACTIVE ITEM
    items[itemActive].classList.add('active');
}

// Navigation Menu Toggle
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Menu Show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Dropdown Menu Toggle
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        this.nextElementSibling.classList.toggle('show-dropdown');
    });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    let dropdowns = document.querySelectorAll('.dropdown-menu.show-dropdown');
    dropdowns.forEach(dropdown => {
        if (!event.target.closest('.dropdown-toggle') && !dropdown.contains(event.target) && !document.querySelector('.slider').contains(event.target)) {
            dropdown.classList.remove('show-dropdown');
        }
    });
});