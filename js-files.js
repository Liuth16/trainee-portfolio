document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(setupCarousel);
});

function setupCarousel(root) {
  const items = root.querySelectorAll(".carousel-item");
  const prevBtn = root.querySelector(".carousel-control.prev");
  const nextBtn = root.querySelector(".carousel-control.next");
  let autoCycleInterval;

  let index = Array.from(items).findIndex((i) =>
    i.classList.contains("active")
  );
  if (index < 0 && items.length) {
    index = 0;
    items[0].classList.add("active");
  }

  const show = (i) => {
    if (!items.length) return;
    const newIndex = (i + items.length) % items.length;
    if (newIndex === index) return;
    items[index]?.classList.remove("active");
    items[newIndex].classList.add("active");
    index = newIndex;
  };

  prevBtn?.addEventListener("click", () => {
    clearInterval(autoCycleInterval);
    show(index - 1);
  });

  nextBtn?.addEventListener("click", () => {
    clearInterval(autoCycleInterval);
    show(index + 1);
  });

  autoCycleInterval = setInterval(() => {
    show(index + 1);
  }, 5000);
}

// read more button
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const description = btn.previousElementSibling;
    const moreText = description.querySelector(".more-text");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  });
});
