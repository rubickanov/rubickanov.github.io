var pageName = window.location.pathname.split('/').pop();
if (pageName === '') {
    pageName = 'home';
}
var navLink = document.getElementById(pageName);
if (navLink) {
    navLink.classList.add('active');
}