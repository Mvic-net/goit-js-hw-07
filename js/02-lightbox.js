import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// console.log(galleryContainer);
const galleryMarkup = createGalleryEl(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__link"href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li>
        `;
    })

    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
