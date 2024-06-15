const nav = document.getElementById('main-nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled'); // Add class for scrolled style (optional)
  } else {
    nav.classList.remove('scrolled');
  }
});
