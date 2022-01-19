
import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector(".gallery");
const body = document.querySelector("body");

const renderingGallery = (itemsArr) => {

    return itemsArr.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
        <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        />
        </a>
    </div>
        `
    }).join();
}
galleryList.insertAdjacentHTML("beforeend",renderingGallery(galleryItems));
console.log(renderingGallery(galleryItems));
const openModal = (Event) => {
    Event.preventDefault();
    if (Event.target == Event.currentTarget){
        return;
    }
    const bigImgUrl = Event.target.dataset.source;

    console.log(bigImgUrl);
    
}

galleryList.addEventListener("click", openModal);

