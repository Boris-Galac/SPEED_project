let navHam = document.querySelector('.nav__ham');
let navLinks = document.querySelector('.nav__links');
let links = document.querySelectorAll('.nav__link');
let span = document.querySelectorAll('span');
let overlay = document.createElement('div');
let navClose = document.querySelector('.nav__menu-close');
overlay.classList.add('overlay');

navHam.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active')) {
    document.body.append(overlay);
    navLinks.classList.remove('active');
  } else {
    navLinks.classList.add('active');
  }
  overlay.addEventListener('click', (e) => {
    overlay.remove();
    navLinks.classList.add('active');
  });
});

links.forEach((el) => {
  el.addEventListener('click', (e) => {
    overlay.remove();
    navLinks.classList.add('active');
  });
});

navClose.addEventListener('click', () => {
  overlay.remove();
  navLinks.classList.add('active');
});
