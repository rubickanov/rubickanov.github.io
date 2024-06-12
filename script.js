document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality if needed
});

document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            button.classList.remove('open');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            button.classList.add('open');
        }
    });
});