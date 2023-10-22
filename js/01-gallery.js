import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createMarkup(galleryItems) {
  const galleryList = [];

  for (const { preview, original, description } of galleryItems) {
    galleryList.push(`
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
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

  const largeImgUrl = img.dataset.source;

  const largeImg = basicLightbox.create(
    `
    <div class="modal">
        <img src="${largeImgUrl}" alt="${img.alt}"/>
    </div>
  `,
    {
      onShow: () => {
        img.src = largeImgUrl;
        return true;
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeLargeImage, largeImg);
        return true;
      },
    }
  );

  const closeLargeImage = (event) => {
    if (event.key === "Escape") {
      largeImg.close();
    }
  };

  largeImg.show();
  largeImg.element().addEventListener("click", largeImg.close);

  document.addEventListener("keydown", closeLargeImage, largeImg);
}

const gallery = document.querySelector("ul.gallery");

gallery.innerHTML = createMarkup(galleryItems);

gallery.addEventListener("click", openImage);
