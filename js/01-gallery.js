import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class = "gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
</a>
</div>`
    )
    .join("");
}

const galleryMarkup = createGallery(galleryItems);

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onGalleryImageClick);

let instance = null;

function onGalleryImageClick(e) {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    instance = basicLightbox.create(
      `
    <img src="${e.target.dataset.source}" width="800" height="600" />
`,
      {
        onShow: document.addEventListener(
          "keydown",
          handleKeyDown
        ),
        onClose: document.removeEventListener(
          "keyup",
          handleKeyDown
        ),
      }
    );

    instance.show();
  }
}
function handleKeyDown(e) {
  if (e.key === "Escape" && instance.visible()) {
    instance.close();
  }
}
