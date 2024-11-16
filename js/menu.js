const menuButton = document.querySelector('.menu-burguer');
const menuNavigation = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.link-nav')

menuButton.addEventListener('click', () => {
    menuNavigation.classList.toggle('active');
});

linkNav.forEach( link => {
    link.addEventListener('click', () => {
       if (menuNavigation.classList.contains('active')){
        menuNavigation.classList.remove('active');
       }
    })
});