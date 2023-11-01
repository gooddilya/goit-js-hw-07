import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
            </a>
        </li>`
    )
    .join("");
}

const galleryMarkup = createGallery(galleryItems);

galleryEl.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox(".gallery__item a", {
  animationSpeed: 250,
  captionsData: "alt",
});
