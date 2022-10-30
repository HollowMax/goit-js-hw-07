import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const init = function () {
  let galleryLi = '';
  galleryItems.forEach(
    item =>
      (galleryLi += `<li class="gallery__item"><a href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`)
  );
  return galleryLi;
};

const openModal = function (e) {
  e.preventDefault();
  const imageItem = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};

const galleryUl = document.querySelector('.gallery');

galleryUl.innerHTML = init();

galleryUl.addEventListener('click', openModal);
