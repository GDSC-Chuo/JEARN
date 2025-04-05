document.addEventListener("DOMContentLoaded", () => {
  const hbMenu = document.getElementById("hb-menu");
  const menuList = document.getElementById("menu-list");
  const overlay = document.getElementById("overlay");
  const accordions = document.querySelectorAll(".has-submenu button");

  function toggleMenu() {
    const isOpen = menuList.classList.contains("show");

    if (isOpen) {
      menuList.classList.remove("show");
      overlay.classList.remove("show");
    } else {
      menuList.classList.add("show");
      overlay.classList.add("show");
    }
  }

  hbMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // アコーディオンメニュー
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.classList.toggle("open");

      const submenu = accordion.nextElementSibling;
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });
});
