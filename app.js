// Inclus d'abord la bibliothèque CamanJS dans ton projet

// Sélectionne l'élément img de la carte de film
const filmImage = document.querySelector('.movie-card img');

// Applique un filtre à l'image
Caman(filmImage, function () {
  this.brightness(10);
  this.contrast(5);
  this.render();
});
