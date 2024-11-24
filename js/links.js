/*-- Menu Navigation*/

const menuOpen = document.querySelector('.open-menu');
const menuClose = document.querySelector('.close-menu');
const menuNavigation = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.link-nav');
const listNavigation = document.querySelector('.list-navigation');
const menuOpenStyle = window.getComputedStyle(menuOpen);

function openMenuVisible(){
    if (menuOpenStyle.display == 'block') {
        menuNavigation.setAttribute('aria-hidden', true);
    } else {
        menuNavigation.setAttribute('aria-hidden', false);
    }
}

window.addEventListener('load', openMenuVisible());
window.addEventListener('resize', openMenuVisible());

menuOpen.addEventListener('click', () => {
    console.log(menuClose)
    menuNavigation.classList.add('active');
    menuOpen.classList.remove('active');
    menuClose.classList.add('active');
    listNavigation.classList.add('list-active')
    linkNav[0].focus();
});

menuClose.addEventListener('click', () => {
    menuNavigation.classList.remove('active');
    menuClose.classList.remove('active');
    menuOpen.classList.add('active');
    menuOpen.focus();
    setTimeout(() => {
        listNavigation.classList.remove('list-active');
    }, 500)
});

linkNav.forEach( linknav => {
    linknav.addEventListener('mousemove', () => {
        linknav.classList.add('link-nav-active');
    })

    linknav.addEventListener('mouseout', () => {
        linknav.classList.remove('link-nav-active');
    })

    linknav.addEventListener('click', () => {
        linknav.classList.add('link-nav-active');
        if (menuNavigation.classList.contains('active')){
        menuNavigation.classList.remove('active');
        menuClose.classList.remove('active');
        menuOpen.classList.add('active');
       }

       setTimeout(() => {
        linknav.classList.remove('link-nav-active');
       }, 200)

    })
});



/*-- Link Hero --*/

const btnHome = document.querySelector('.btn-home');

btnHome.addEventListener('click', () => {
    btnHome.classList.add('btn-active');

    setTimeout(() => {
        btnHome.classList.remove('btn-active');
    }, 200)
})

btnHome.addEventListener('mousemove', () => {
    btnHome.classList.add('btn-active');
})

btnHome.addEventListener('mouseout', () => {
    btnHome.classList.remove('btn-active');
})

/*-- Links Section Contact --*/

const links = document.querySelectorAll('.links');

links.forEach( link => {
    link.addEventListener('mousemove', () => {
        link.classList.add('link-contact-active');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('link-contact-active');
    });
    link.addEventListener('click', () => {
        link.classList.add('link-contact-active')
        setTimeout( ()=> {
            link.classList.remove('link-contact-active');
        }, 200)
    })
})