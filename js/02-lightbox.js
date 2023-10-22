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

document.querySelector("ul.gallery").innerHTML = createMarkup(galleryItems);

console.log(galleryItems);
