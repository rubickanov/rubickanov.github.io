var pageName = window.location.pathname.split('/').pop().split('.')[0];
if (pageName === '') {
    pageName = 'home';
}
var navLink = document.getElementById(pageName);
if (navLink) {
    navLink.classList.add('active');
}