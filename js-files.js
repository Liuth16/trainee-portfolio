document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(setupCarousel);
});

function setupCarousel(root) {
  const items = root.querySelectorAll(".carousel-item");
  const prevBtn = root.querySelector(".carousel-control.prev");
  const nextBtn = root.querySelector(".carousel-control.next");

  let index = Array.from(items).findIndex((i) =>
    i.classList.contains("active")
  );
  if (index < 0 && items.length) {
    index = 0;
    items[0].classList.add("active");
  }

  const updateHeight = () => {
    const active = items[index];
    if (!active) return;
    const img = active.querySelector("img");
    if (!img) return;

    if (img.naturalWidth && img.naturalHeight) {
      const displayedHeight =
        (root.clientWidth / img.naturalWidth) * img.naturalHeight;
      root.style.height = `${Math.round(displayedHeight)}px`;
    } else {
      img.addEventListener("load", updateHeight, { once: true });
    }
  };

  const show = (i) => {
    if (!items.length) return;
    const newIndex = (i + items.length) % items.length;
    if (newIndex === index) return;
    items[index]?.classList.remove("active");
    items[newIndex].classList.add("active");
    index = newIndex;
    updateHeight();
  };

  prevBtn?.addEventListener("click", () => show(index - 1));
  nextBtn?.addEventListener("click", () => show(index + 1));

  window.addEventListener("resize", updateHeight);
  items.forEach((item) => {
    const img = item.querySelector("img");
    if (img && !img.complete)
      img.addEventListener("load", updateHeight, { once: true });
  });

  updateHeight();
}
