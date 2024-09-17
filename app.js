/* Created by Tivotal */

let sidebar = document.querySelector(".sidebar");
let menuBtn = document.querySelector(".menu-btn");

var toggleMenu = () => {
  sidebar.classList.toggle("close");
  menuBtn.classList.toggle("rotate");

  closeSubmenu();
};

var toggleSubmenu = (btn) => {
  if (!btn.nextElementSibling.classList.contains("show")) {
    closeSubmenu();
  }

  btn.nextElementSibling.classList.toggle("show");
  btn.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    menuBtn.classList.toggle("rotate");
  }
};

var closeSubmenu = () => {
  document.querySelectorAll(".show").forEach((elem) => {
    elem.classList.remove("show");
    elem.previousElementSibling.classList.remove("rotate");
  });
};
