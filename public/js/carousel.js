document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".carousel").forEach((carousel) => {

    const img = carousel.querySelector(".carousel-image");
    const caption = carousel.querySelector(".carousel-caption");
    const prev = carousel.querySelector(".prev-btn");
    const next = carousel.querySelector(".next-btn");

    if (!img || !prev || !next) {
      console.warn("Carousel missing elements:", carousel);
      return;
    }

    const images = (carousel.dataset.images || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    const captions = (carousel.dataset.captions || "")
      .split(",")
      .map(s => s.trim());

    if (images.length === 0) {
      console.warn("Carousel has no images:", carousel);
      return;
    }

    let index = 0;

    function show(i) {
      img.src = images[i];

      if (caption && captions.length > i) {
        caption.textContent = captions[i];
      }
    }

    next.addEventListener("click", () => {
      index = (index + 1) % images.length;
      show(index);
    });

    prev.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      show(index);
    });

    show(index);
  });

});
// document.addEventListener("DOMContentLoaded", () => {

//   document.querySelectorAll(".carousel").forEach((carousel) => {

//     const img = carousel.querySelector(".carousel-image");
//     const prev = carousel.querySelector(".prev-btn");
//     const next = carousel.querySelector(".next-btn");

//     if (!img || !prev || !next) {
//       console.warn("Carousel missing elements:", carousel);
//       return;
//     }

//     const images = (carousel.dataset.images || "")
//       .split(",")
//       .map(s => s.trim())
//       .filter(Boolean);

//     if (images.length === 0) {
//       console.warn("Carousel has no images:", carousel);
//       return;
//     }

//     let index = 0;

//     function show(i) {
//       img.src = images[i];
//     }

//     next.addEventListener("click", () => {
//       index = (index + 1) % images.length;
//       show(index);
//     });

//     prev.addEventListener("click", () => {
//       index = (index - 1 + images.length) % images.length;
//       show(index);
//     });

//     show(index); // ensure sync on load
//   });

// });