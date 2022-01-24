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
galleryList.insertAdjacentHTML("beforeend", renderingGallery(galleryItems));


const keyOpen = (Event) => {
    let picture = document.querySelector("div.basicLightbox");
    if (Event.code === "Escape") {
        
        document.removeEventListener("keydown", keyOpen);
        picture.remove();
        
    }
    return ;
    
}

const openModal = (Event) => {
    Event.preventDefault();
    if (Event.target == Event.currentTarget){
        return;
    }
    const bigImgUrl = Event.target.dataset.source;

    
const instance = basicLightbox.create(`<img src="${bigImgUrl}" width="1280" height="840">`)

    instance.show();
    let picture = document.querySelector("div.basicLightbox");
    
    document.addEventListener("keydown", keyOpen);
}

galleryList.addEventListener("click", openModal);

