import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// console.log(galleryContainer);

const galleryMarkup = createGalleryEl(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", openOriginalImg);

function createGalleryEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}" />
            </a>
        </li>
        `;
    })

    .join("");
}

function openOriginalImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${evt.target.dataset.source}">`,
    {
      onShow: (instance) => document.addEventListener("keydown", closeKey),
      onClose: (instance) => document.removeEventListener("keydown", closeKey),
    }
  );

  instance.show();

  function closeKey(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  console.log(evt.target);
  console.log(evt.target.nodeName);
}
