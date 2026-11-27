const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 740px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.hidden = mobile.matches && !open;
}
function syncMenu() {
  toggle.hidden = !mobile.matches;
  setMenu(false);
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', syncMenu);
syncMenu();
