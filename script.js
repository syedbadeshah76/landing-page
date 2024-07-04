document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.drop-down');
    const navbar = document.querySelector('.nav-bar');

    dropdown.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
});
