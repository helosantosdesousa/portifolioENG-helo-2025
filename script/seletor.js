document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector('#projetos .row');
  var iso = new Isotope(grid, {
    itemSelector: '.col-12',
    layoutMode: 'fitRows',
    filter: '.fav'  
  });

  const buttons = document.querySelectorAll('[data-filter]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let filter = button.getAttribute('data-filter');
      iso.arrange({ filter: filter });

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
