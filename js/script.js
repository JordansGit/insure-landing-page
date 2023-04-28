let nav = document.querySelector('.header-nav');
let mobileMenu = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.nav-close-btn');

mobileMenu.addEventListener('click', function() {
  nav.classList.add('nav-open-nav');
  closeBtn.classList.add('nav-open-close-btn');
  mobileMenu.classList.add('nav-open-mobile-menu');
  document.body.classList.add('nav-open-body');

})

closeBtn.addEventListener('click', function() {
  nav.classList.remove('nav-open-nav');
  mobileMenu.classList.remove('nav-open-mobile-menu');
  closeBtn.classList.remove('nav-open-close-btn');
  document.body.classList.remove('nav-open-body');
})