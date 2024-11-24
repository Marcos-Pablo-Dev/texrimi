/*-- Menu Navigation*/

var menuOpen = document.querySelector('.open-menu');
var menuClose = document.querySelector('.close-menu');
var menuNavigation = document.querySelector('.navigation');
var linkNav = document.querySelectorAll('.link-nav');
var listNavigation = document.querySelector('.list-navigation');
var menuOpenStyle = window.getComputedStyle(menuOpen);
function openMenuVisible() {
  if (menuOpenStyle.display == 'block') {
    menuNavigation.setAttribute('aria-hidden', true);
  } else {
    menuNavigation.setAttribute('aria-hidden', false);
  }
}
window.addEventListener('load', openMenuVisible());
window.addEventListener('resize', openMenuVisible());
menuOpen.addEventListener('click', function () {
  console.log(menuClose);
  menuNavigation.classList.add('active');
  menuOpen.classList.remove('active');
  menuClose.classList.add('active');
  listNavigation.classList.add('list-active');
  linkNav[0].focus();
});
menuClose.addEventListener('click', function () {
  menuNavigation.classList.remove('active');
  menuClose.classList.remove('active');
  menuOpen.classList.add('active');
  menuOpen.focus();
  setTimeout(function () {
    listNavigation.classList.remove('list-active');
  }, 500);
});
linkNav.forEach(function (linknav) {
  linknav.addEventListener('mousemove', function () {
    linknav.classList.add('link-nav-active');
  });
  linknav.addEventListener('mouseout', function () {
    linknav.classList.remove('link-nav-active');
  });
  linknav.addEventListener('click', function () {
    linknav.classList.add('link-nav-active');
    if (menuNavigation.classList.contains('active')) {
      menuNavigation.classList.remove('active');
      menuClose.classList.remove('active');
      menuOpen.classList.add('active');
    }
    setTimeout(function () {
      linknav.classList.remove('link-nav-active');
    }, 200);
  });
});

/*-- Link Hero --*/

var btnHome = document.querySelector('.btn-home');
btnHome.addEventListener('click', function () {
  btnHome.classList.add('btn-active');
  setTimeout(function () {
    btnHome.classList.remove('btn-active');
  }, 200);
});
btnHome.addEventListener('mousemove', function () {
  btnHome.classList.add('btn-active');
});
btnHome.addEventListener('mouseout', function () {
  btnHome.classList.remove('btn-active');
});

/*-- Links Section Contact --*/

var links = document.querySelectorAll('.links');
links.forEach(function (link) {
  link.addEventListener('mousemove', function () {
    link.classList.add('link-contact-active');
  });
  link.addEventListener('mouseout', function () {
    link.classList.remove('link-contact-active');
  });
  link.addEventListener('click', function () {
    link.classList.add('link-contact-active');
    setTimeout(function () {
      link.classList.remove('link-contact-active');
    }, 200);
  });
});