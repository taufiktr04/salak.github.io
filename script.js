const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById("nav-toggle"),
    nav = document.getElementById("menu-show");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }
};

showMenu("nav-toggle", "menu-show");
