
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("python-lightbox");

  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector(".python-lightbox-image");
  const closeButton = lightbox.querySelector(".python-lightbox-close");
  const imageButtons = document.querySelectorAll(".python-gallery-image-button");

  let previouslyFocusedElement = null;

  function openLightbox(button) {
    const imageUrl = button.dataset.fullImage;
    const imageAlt = button.dataset.imageAlt || "";

    if (!imageUrl) return;

    previouslyFocusedElement = button;

    lightboxImage.src = imageUrl;
    lightboxImage.alt = imageAlt;

    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("python-lightbox-open");

    closeButton.focus();
  }

  function closeLightbox() {
    if (lightbox.hidden) return;

    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.classList.remove("python-lightbox-open");

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  imageButtons.forEach((button) => {
    button.addEventListener("click", () => openLightbox(button));
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
});
