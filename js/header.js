const menuOpen = document.querySelector('.open-menu')
const menuClose = document.querySelector('.close-menu')
const menuNavigation = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.link-nav')

menuOpen.addEventListener('click', () => {
    menuNavigation.classList.add('active');
    menuOpen.classList.remove('active');
    menuClose.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menuNavigation.classList.remove('active');
    menuClose.classList.remove('active');
    menuOpen.classList.add('active');
});


linkNav.forEach( link => {
    link.addEventListener('mousemove', () => {
        link.classList.add('link-active');
    })

    link.addEventListener('mouseout', () => {
        link.classList.remove('link-active');
    })

    link.addEventListener('click', () => {
       if (menuNavigation.classList.contains('active')){
        menuNavigation.classList.remove('active');
        menuClose.classList.remove('active');
        menuOpen.classList.add('active');
       }

       link.classList.add('link-active');

       setTimeout(() => {
        if ('')
        link.classList.remove('link-active');
       }, 200)

    })
});