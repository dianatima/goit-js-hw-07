import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGalleryElMarkup = ({preview, original, description}) => {

    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
};

const makeGallery = galleryItems.map(makeGalleryElMarkup).join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);

function  onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    };
    
    const img = event.target;
    const imgUrl = img.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
`);

  instance.show();

  let visible = instance.visible();

  document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && visible) {
      visible = false;
      instance.close();
    }
  });

};

gallery.addEventListener('click', onImageClick);