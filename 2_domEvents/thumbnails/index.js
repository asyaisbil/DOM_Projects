

const thumbnails = document.querySelectorAll('header.main-navigation img');

const mainImage = document.getElementById('main-image');

// Her bir thumbnail için mouseenter event'i ekliyoruz
thumbnails.forEach(function (i) {
  i.addEventListener('mouseenter', function (event) {
    // main image'in src'sini, üzerine gelinen resmin src'si ile değiştiriyoruz
    mainImage.src = event.target.src;
  });
});