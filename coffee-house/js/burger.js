const burger = document.querySelector('.header__hamburger');
const burgerMenu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__list-item');
const themeSwitcher = document.querySelector('.menu__theme-switcher');

burger.addEventListener('click', (event) => {
  event.stopPropagation();

  burger.classList.toggle('hamburger-activ');
  burgerMenu.classList.toggle('menu-activ');
  document.body.classList.toggle('hidden');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeBurgerMenu();
  });
});

document.addEventListener('click', (event) => {
  const isMenuOpen = burgerMenu.classList.contains('menu-activ');

  if (!isMenuOpen) {
    return;
  }

  const clickInsideMenu = burgerMenu.contains(event.target);
  const clickOnBurger = burger.contains(event.target);
  const clickOnThemeSwitcher = themeSwitcher?.contains(event.target);

  if (
    !clickInsideMenu &&
    !clickOnBurger &&
    !clickOnThemeSwitcher
  ) {
    closeBurgerMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    burgerMenu.classList.contains('menu-activ')
  ) {
    closeBurgerMenu();
  }
});

function closeBurgerMenu() {
  burger.classList.remove('hamburger-activ');
  burgerMenu.classList.remove('menu-activ');
  document.body.classList.remove('hidden');
}