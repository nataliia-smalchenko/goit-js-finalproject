import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createMarkup(galleryItems) {
  const galleryList = [];

  for (const { preview, original, description } of galleryItems) {
    galleryList.push(`
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
      </li>`);
  }
  return galleryList.join("");
}

function openImage(event) {
  const img = event.target;
  if (img.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
}

const gallery = document.querySelector("ul.gallery");

gallery.innerHTML = createMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", openImage);
