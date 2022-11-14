// Бургер меню
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const overLay = document.querySelector('.overlay__menu');

const widjetMenu = document.querySelector('.widjet-menu__icon');
const widjetBody = document.querySelector('.widjet__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    overLay.classList.toggle('_active');
  });
}

const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      overLay.classList.remove('_active');
    }
  }
}

window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('.menu__body') && !target.closest('.menu__icon')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    overLay.classList.remove('_active');
  }
});

// widjet-menu
if (widjetMenu) {
  widjetMenu.addEventListener('click', function (e) {
    widjetMenu.classList.toggle('_active');
    widjetBody.classList.toggle('_active');
  });
}

window.addEventListener('click', (e) => {
  const target = e.target;
  if (
    !target.closest('.widjet__body') &&
    !target.closest('.widjet-menu__icon')
  ) {
    widjetMenu.classList.remove('_active');
    widjetBody.classList.remove('_active');
  }
});

const menuWidjetLinks = document.querySelectorAll('.widjet-menu__link');
if (menuWidjetLinks.length > 0) {
  menuWidjetLinks.forEach((menuWidjetLinks) => {
    menuWidjetLinks.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuWidjetLinks = e.target;
    if (widjetMenu.classList.contains('_active')) {
      widjetMenu.classList.remove('_active');
      widjetBody.classList.remove('_active');
      overLay.classList.remove('_active');
    }
  }
}
