document.addEventListener("turbo:load", () => {
  const hamburger = document.getElementById("hamburger-btn");
  const menu = document.getElementById("hamburger-menu");
  if (!hamburger || !menu) return;

  const menuLinks = menu.querySelectorAll("a");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});
