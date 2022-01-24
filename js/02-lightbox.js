import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const renderingGallery = (itemsArr) => {

    return itemsArr.map(({ original, preview, description }) => {
        return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
    }).join();
}
galleryList.insertAdjacentHTML("beforeend", renderingGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "button",captionDelay:"250"});
