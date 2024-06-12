document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality if needed
});

document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', () => {
        toggleDescription(button);
    });
});

// Select all project logos
const projectLogos = document.querySelectorAll('.project img');

// Loop through each logo
projectLogos.forEach((logo) => {
    // Add click event listener
    logo.addEventListener('click', (event) => {
        // Find the corresponding button
        const button = event.target.parentNode.querySelector('.dropdown-button');
        toggleDescription(button);
    });
});

function toggleDescription(button) {
    const content = button.previousElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.classList.remove('open');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        button.classList.add('open');
    }
}