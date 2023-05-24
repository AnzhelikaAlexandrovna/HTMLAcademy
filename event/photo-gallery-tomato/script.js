const pictures = [
    'gallery-tomato/tomato-red-large.jpg',
    'gallery-tomato/tomato-yellow-large.jpg',
    'gallery-tomato/tomato-strange-large.jpg'
  ];
  
  const picturePrewiew = document.querySelectorAll('.gallery__picture-preview');
  const fullPicture = document.querySelector('.full-picture');
  
  const clickPicture = function (preview, full) {
    preview.addEventListener('click', function () {
      fullPicture.src = full;
    });
  };
  
  for (let i = 0; i < picturePrewiew.length; i++) {
    clickPicture(picturePrewiew[i], pictures[i]);
  };
  
  /* Техническое задание
  Мяу! Нужно оживить галерею с фотографиями товаров.
  В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').
  После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.
  Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.*/
  