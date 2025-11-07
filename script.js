// Petit effet d’apparition au scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
});
