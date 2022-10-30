import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryInit = function () {
  let htmlGallery = '';
  galleryItems.forEach(
    item =>
      (htmlGallery += `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </div>
      `)
  );
  return htmlGallery;
};

const openModal = function (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const item = basicLightbox.create(
    `
     <img src="${event.target.dataset.source}" width="800" height="600">
    `
  );
  const gal = this;
  const onBackdrop = function () {
    item.element().removeEventListener('click', onBackdrop);
    gal.removeEventListener('keydown', onEscPress);
  };

  const onEscPress = function (e) {
    if (e.code.toUpperCase() === 'ESCAPE') {
      gal.removeEventListener('keydown', onEscPress);
      item.close();
    }
  };
  item.show();
  item.element().addEventListener('click', onBackdrop);
  this.addEventListener('keydown', onEscPress);
};

const galleryDiv = document.querySelector('.gallery');
galleryDiv.innerHTML = galleryInit();

galleryDiv.addEventListener('click', openModal);
