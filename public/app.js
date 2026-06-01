const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = primaryNav.getAttribute('data-open') === 'true';
    primaryNav.setAttribute('data-open', String(!isOpen));
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      primaryNav.setAttribute('data-open', 'false');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      primaryNav.setAttribute('data-open', 'false');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}
